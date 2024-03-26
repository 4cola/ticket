
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE EXTENSION IF NOT EXISTS "pg_net" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgsodium" WITH SCHEMA "pgsodium";

COMMENT ON SCHEMA "public" IS 'standard public schema';

CREATE EXTENSION IF NOT EXISTS "citext" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "moddatetime" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";

CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgjwt" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";

CREATE TYPE "public"."crud" AS ENUM (
    'create',
    'read',
    'update',
    'delete'
);

ALTER TYPE "public"."crud" OWNER TO "postgres";

CREATE TYPE "public"."post_status" AS ENUM (
    'published',
    'under_review',
    'draft',
    'rejected'
);

ALTER TYPE "public"."post_status" OWNER TO "postgres";

CREATE OR REPLACE FUNCTION "public"."has_permission"("uid" "uuid", "tbname" character varying, "opr" "public"."crud") RETURNS boolean
    LANGUAGE "plpgsql"
    AS $$DECLARE
    result BOOLEAN;
BEGIN
    SELECT EXISTS (
        SELECT 1
        FROM groups_permissions gp
        JOIN permissions p ON gp.permission_id = p.id
        JOIN users_groups ug ON ug.group_id = gp.group_id
        WHERE ug.user_id = uid
          AND p.table_name = tbName
          AND p.operation = opr
    ) INTO result;

    RETURN result;
END;
$$;

ALTER FUNCTION "public"."has_permission"("uid" "uuid", "tbname" character varying, "opr" "public"."crud") OWNER TO "postgres";

SET default_tablespace = '';

SET default_table_access_method = "heap";

CREATE TABLE IF NOT EXISTS "public"."categories" (
    "id" bigint NOT NULL,
    "name" character varying DEFAULT ''::character varying NOT NULL,
    "description" character varying DEFAULT ''::character varying NOT NULL,
    "slug" character varying NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL
);

ALTER TABLE "public"."categories" OWNER TO "postgres";

ALTER TABLE "public"."categories" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."categories_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);

CREATE TABLE IF NOT EXISTS "public"."configs" (
    "id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "key" character varying DEFAULT ''::character varying NOT NULL,
    "value" "jsonb"
);

ALTER TABLE "public"."configs" OWNER TO "postgres";

ALTER TABLE "public"."configs" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."configs_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);

CREATE TABLE IF NOT EXISTS "public"."groups" (
    "id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "name" character varying DEFAULT ''::character varying NOT NULL
);

ALTER TABLE "public"."groups" OWNER TO "postgres";

ALTER TABLE "public"."groups" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."groups_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);

CREATE TABLE IF NOT EXISTS "public"."groups_permissions" (
    "group_id" bigint NOT NULL,
    "permission_id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL
);

ALTER TABLE "public"."groups_permissions" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."images" (
    "id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "source" character varying(250),
    "url" character varying DEFAULT ''::character varying NOT NULL,
    "description" character varying DEFAULT ''::character varying NOT NULL,
    "object_id" "uuid",
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL
);

ALTER TABLE "public"."images" OWNER TO "postgres";

ALTER TABLE "public"."images" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."images_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);

CREATE TABLE IF NOT EXISTS "public"."permissions" (
    "id" bigint NOT NULL,
    "operation" "public"."crud" DEFAULT 'read'::"public"."crud" NOT NULL,
    "table_name" character varying DEFAULT ''::character varying NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL
);

ALTER TABLE "public"."permissions" OWNER TO "postgres";

ALTER TABLE "public"."permissions" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."permissions_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);

CREATE TABLE IF NOT EXISTS "public"."posts" (
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "title" character varying(200) DEFAULT ''::character varying NOT NULL,
    "excerpt" character varying DEFAULT ''::character varying NOT NULL,
    "html" "text",
    "featured_image" character varying,
    "slug" character varying DEFAULT ''::character varying NOT NULL,
    "keywords" character varying,
    "author_id" "uuid",
    "id" bigint NOT NULL,
    "status" "public"."post_status" DEFAULT 'draft'::"public"."post_status" NOT NULL
);

ALTER TABLE "public"."posts" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."posts_categories" (
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "category_id" bigint NOT NULL,
    "post_id" bigint NOT NULL
);

ALTER TABLE "public"."posts_categories" OWNER TO "postgres";

ALTER TABLE "public"."posts" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."posts_id2_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);

CREATE TABLE IF NOT EXISTS "public"."posts_tags" (
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "tag_id" bigint NOT NULL,
    "post_id" bigint NOT NULL
);

ALTER TABLE "public"."posts_tags" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."tags" (
    "id" bigint NOT NULL,
    "created_at" timestamp(6) with time zone DEFAULT "now"() NOT NULL,
    "name" character varying DEFAULT ''::character varying NOT NULL,
    "slug" character varying NOT NULL,
    "description" character varying DEFAULT ''::character varying NOT NULL
);

ALTER TABLE "public"."tags" OWNER TO "postgres";

CREATE SEQUENCE IF NOT EXISTS "public"."tags_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE "public"."tags_id_seq" OWNER TO "postgres";

ALTER SEQUENCE "public"."tags_id_seq" OWNED BY "public"."tags"."id";

ALTER TABLE "public"."tags" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."tags_id_seq1"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);

CREATE SEQUENCE IF NOT EXISTS "public"."tmr_image_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE "public"."tmr_image_id_seq" OWNER TO "postgres";

ALTER SEQUENCE "public"."tmr_image_id_seq" OWNED BY "public"."images"."id";

CREATE TABLE IF NOT EXISTS "public"."users_groups" (
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "user_id" "uuid" NOT NULL,
    "group_id" bigint NOT NULL
);

ALTER TABLE "public"."users_groups" OWNER TO "postgres";

CREATE OR REPLACE VIEW "public"."v_categories" AS
SELECT
    NULL::bigint AS "id",
    NULL::timestamp with time zone AS "created_at",
    NULL::character varying AS "name",
    NULL::character varying AS "slug",
    NULL::character varying AS "description",
    NULL::bigint AS "count";

ALTER TABLE "public"."v_categories" OWNER TO "postgres";

CREATE OR REPLACE VIEW "public"."v_posts" AS
SELECT
    NULL::bigint AS "id",
    NULL::character varying(200) AS "title",
    NULL::character varying AS "excerpt",
    NULL::character varying AS "slug",
    NULL::character varying AS "featured_image",
    NULL::"text" AS "html",
    NULL::timestamp with time zone AS "updated_at",
    NULL::timestamp with time zone AS "created_at",
    NULL::"public"."post_status" AS "status",
    NULL::character varying[] AS "tags",
    NULL::character varying[] AS "categories";

ALTER TABLE "public"."v_posts" OWNER TO "postgres";

CREATE OR REPLACE VIEW "public"."v_tags" AS
SELECT
    NULL::bigint AS "id",
    NULL::timestamp(6) with time zone AS "created_at",
    NULL::character varying AS "name",
    NULL::character varying AS "slug",
    NULL::character varying AS "description",
    NULL::bigint AS "count";

ALTER TABLE "public"."v_tags" OWNER TO "postgres";

ALTER TABLE ONLY "public"."categories"
    ADD CONSTRAINT "categories_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."categories"
    ADD CONSTRAINT "categories_slug_key" UNIQUE ("slug");

ALTER TABLE ONLY "public"."configs"
    ADD CONSTRAINT "configs_key_key" UNIQUE ("key");

ALTER TABLE ONLY "public"."configs"
    ADD CONSTRAINT "configs_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."groups"
    ADD CONSTRAINT "groups_name_key" UNIQUE ("name");

ALTER TABLE ONLY "public"."groups_permissions"
    ADD CONSTRAINT "groups_permissions_pkey" PRIMARY KEY ("group_id", "permission_id");

ALTER TABLE ONLY "public"."groups"
    ADD CONSTRAINT "groups_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."permissions"
    ADD CONSTRAINT "permissions_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."posts_categories"
    ADD CONSTRAINT "posts_categories_pkey" PRIMARY KEY ("category_id", "post_id");

ALTER TABLE ONLY "public"."posts"
    ADD CONSTRAINT "posts_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."posts_tags"
    ADD CONSTRAINT "posts_tags_pkey" PRIMARY KEY ("tag_id", "post_id");

ALTER TABLE ONLY "public"."images"
    ADD CONSTRAINT "source_unique" UNIQUE ("source");

ALTER TABLE ONLY "public"."tags"
    ADD CONSTRAINT "tags_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."tags"
    ADD CONSTRAINT "tags_uri_928cdc64_uniq" UNIQUE ("slug");

ALTER TABLE ONLY "public"."images"
    ADD CONSTRAINT "tmr_image_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."posts"
    ADD CONSTRAINT "unique_posts_slug" UNIQUE ("slug");

ALTER TABLE ONLY "public"."images"
    ADD CONSTRAINT "url_unique" UNIQUE ("url");

ALTER TABLE ONLY "public"."users_groups"
    ADD CONSTRAINT "users_groups_pkey" PRIMARY KEY ("user_id", "group_id");

CREATE INDEX "idx_create_time" ON "public"."posts" USING "btree" ("created_at");

CREATE INDEX "idx_slug" ON "public"."posts" USING "btree" ("slug");

CREATE INDEX "tags_uri_928cdc64_like" ON "public"."tags" USING "btree" ("slug" "varchar_pattern_ops");

CREATE OR REPLACE VIEW "public"."v_categories" AS
 SELECT "c"."id",
    "c"."created_at",
    "c"."name",
    "c"."slug",
    "c"."description",
    COALESCE("count"("pc"."post_id"), (0)::bigint) AS "count"
   FROM ("public"."categories" "c"
     LEFT JOIN "public"."posts_categories" "pc" ON (("c"."id" = "pc"."category_id")))
  GROUP BY "c"."id";

CREATE OR REPLACE VIEW "public"."v_posts" AS
 SELECT "p"."id",
    "p"."title",
    "p"."excerpt",
    "p"."slug",
    "p"."featured_image",
    "p"."html",
    "p"."updated_at",
    "p"."created_at",
    "p"."status",
    COALESCE("array_agg"(DISTINCT "t"."slug") FILTER (WHERE ("t"."slug" IS NOT NULL)), ARRAY[]::character varying[]) AS "tags",
    COALESCE("array_agg"(DISTINCT "c"."slug") FILTER (WHERE ("c"."slug" IS NOT NULL)), ARRAY[]::character varying[]) AS "categories"
   FROM (((("public"."posts" "p"
     LEFT JOIN "public"."posts_categories" "pc" ON (("p"."id" = "pc"."post_id")))
     LEFT JOIN "public"."categories" "c" ON (("pc"."category_id" = "c"."id")))
     LEFT JOIN "public"."posts_tags" "pt" ON (("p"."id" = "pt"."post_id")))
     LEFT JOIN "public"."tags" "t" ON (("pt"."tag_id" = "t"."id")))
  GROUP BY "p"."id";

CREATE OR REPLACE VIEW "public"."v_tags" AS
 SELECT "t"."id",
    "t"."created_at",
    "t"."name",
    "t"."slug",
    "t"."description",
    COALESCE("count"("pt"."post_id"), (0)::bigint) AS "count"
   FROM ("public"."tags" "t"
     LEFT JOIN "public"."posts_tags" "pt" ON (("t"."id" = "pt"."tag_id")))
  GROUP BY "t"."id";

ALTER TABLE ONLY "public"."groups_permissions"
    ADD CONSTRAINT "groups_permissions_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "public"."groups"("id") ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY "public"."groups_permissions"
    ADD CONSTRAINT "groups_permissions_permission_id_fkey" FOREIGN KEY ("permission_id") REFERENCES "public"."permissions"("id") ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY "public"."images"
    ADD CONSTRAINT "images_object_id_fkey" FOREIGN KEY ("object_id") REFERENCES "storage"."objects"("id") ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY "public"."posts"
    ADD CONSTRAINT "posts_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "auth"."users"("id") ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY "public"."posts_categories"
    ADD CONSTRAINT "posts_categories_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY "public"."posts_categories"
    ADD CONSTRAINT "posts_categories_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id") ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY "public"."posts_tags"
    ADD CONSTRAINT "posts_tags_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id") ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY "public"."posts_tags"
    ADD CONSTRAINT "posts_tags_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "public"."tags"("id") ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY "public"."users_groups"
    ADD CONSTRAINT "users_groups_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "public"."groups"("id") ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY "public"."users_groups"
    ADD CONSTRAINT "users_groups_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON UPDATE CASCADE ON DELETE CASCADE;

CREATE POLICY "Enable delete for users based on permissions" ON "public"."posts" FOR DELETE USING ("public"."has_permission"("auth"."uid"(), 'posts'::character varying, 'delete'::"public"."crud"));

CREATE POLICY "Enable insert for authenticated users only on permissions" ON "public"."posts" FOR INSERT TO "authenticated" WITH CHECK ("public"."has_permission"("auth"."uid"(), 'posts'::character varying, 'create'::"public"."crud"));

CREATE POLICY "Enable read access for all users" ON "public"."categories" FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."configs" FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."images" FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."posts" FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."posts_categories" FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."posts_tags" FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."tags" FOR SELECT USING (true);

CREATE POLICY "Enable read access for authenticated" ON "public"."groups" FOR SELECT TO "authenticated" USING (true);

CREATE POLICY "Enable read access for authenticated" ON "public"."groups_permissions" FOR SELECT TO "authenticated" USING (true);

CREATE POLICY "Enable read access for authenticated" ON "public"."permissions" FOR SELECT TO "authenticated" USING (true);

CREATE POLICY "Enable read access for authenticated" ON "public"."users_groups" FOR SELECT TO "authenticated" USING (true);

CREATE POLICY "Enable update for users based on permissions" ON "public"."posts" FOR UPDATE USING ("public"."has_permission"("auth"."uid"(), 'posts'::character varying, 'update'::"public"."crud")) WITH CHECK ("public"."has_permission"("auth"."uid"(), 'posts'::character varying, 'update'::"public"."crud"));

ALTER TABLE "public"."categories" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."configs" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."groups" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."groups_permissions" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."images" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."permissions" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."posts" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."posts_categories" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."posts_tags" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."tags" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."users_groups" ENABLE ROW LEVEL SECURITY;

ALTER PUBLICATION "supabase_realtime" OWNER TO "postgres";

GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";

GRANT ALL ON FUNCTION "public"."has_permission"("uid" "uuid", "tbname" character varying, "opr" "public"."crud") TO "anon";
GRANT ALL ON FUNCTION "public"."has_permission"("uid" "uuid", "tbname" character varying, "opr" "public"."crud") TO "authenticated";
GRANT ALL ON FUNCTION "public"."has_permission"("uid" "uuid", "tbname" character varying, "opr" "public"."crud") TO "service_role";

GRANT ALL ON TABLE "public"."categories" TO "anon";
GRANT ALL ON TABLE "public"."categories" TO "authenticated";
GRANT ALL ON TABLE "public"."categories" TO "service_role";

GRANT ALL ON SEQUENCE "public"."categories_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."categories_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."categories_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."configs" TO "anon";
GRANT ALL ON TABLE "public"."configs" TO "authenticated";
GRANT ALL ON TABLE "public"."configs" TO "service_role";

GRANT ALL ON SEQUENCE "public"."configs_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."configs_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."configs_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."groups" TO "anon";
GRANT ALL ON TABLE "public"."groups" TO "authenticated";
GRANT ALL ON TABLE "public"."groups" TO "service_role";

GRANT ALL ON SEQUENCE "public"."groups_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."groups_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."groups_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."groups_permissions" TO "anon";
GRANT ALL ON TABLE "public"."groups_permissions" TO "authenticated";
GRANT ALL ON TABLE "public"."groups_permissions" TO "service_role";

GRANT ALL ON TABLE "public"."images" TO "anon";
GRANT ALL ON TABLE "public"."images" TO "authenticated";
GRANT ALL ON TABLE "public"."images" TO "service_role";

GRANT ALL ON SEQUENCE "public"."images_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."images_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."images_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."permissions" TO "anon";
GRANT ALL ON TABLE "public"."permissions" TO "authenticated";
GRANT ALL ON TABLE "public"."permissions" TO "service_role";

GRANT ALL ON SEQUENCE "public"."permissions_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."permissions_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."permissions_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."posts" TO "anon";
GRANT ALL ON TABLE "public"."posts" TO "authenticated";
GRANT ALL ON TABLE "public"."posts" TO "service_role";

GRANT ALL ON TABLE "public"."posts_categories" TO "anon";
GRANT ALL ON TABLE "public"."posts_categories" TO "authenticated";
GRANT ALL ON TABLE "public"."posts_categories" TO "service_role";

GRANT ALL ON SEQUENCE "public"."posts_id2_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."posts_id2_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."posts_id2_seq" TO "service_role";

GRANT ALL ON TABLE "public"."posts_tags" TO "anon";
GRANT ALL ON TABLE "public"."posts_tags" TO "authenticated";
GRANT ALL ON TABLE "public"."posts_tags" TO "service_role";

GRANT ALL ON TABLE "public"."tags" TO "anon";
GRANT ALL ON TABLE "public"."tags" TO "authenticated";
GRANT ALL ON TABLE "public"."tags" TO "service_role";

GRANT ALL ON SEQUENCE "public"."tags_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."tags_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."tags_id_seq" TO "service_role";

GRANT ALL ON SEQUENCE "public"."tags_id_seq1" TO "anon";
GRANT ALL ON SEQUENCE "public"."tags_id_seq1" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."tags_id_seq1" TO "service_role";

GRANT ALL ON SEQUENCE "public"."tmr_image_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."tmr_image_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."tmr_image_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."users_groups" TO "anon";
GRANT ALL ON TABLE "public"."users_groups" TO "authenticated";
GRANT ALL ON TABLE "public"."users_groups" TO "service_role";

GRANT ALL ON TABLE "public"."v_categories" TO "anon";
GRANT ALL ON TABLE "public"."v_categories" TO "authenticated";
GRANT ALL ON TABLE "public"."v_categories" TO "service_role";

GRANT ALL ON TABLE "public"."v_posts" TO "anon";
GRANT ALL ON TABLE "public"."v_posts" TO "authenticated";
GRANT ALL ON TABLE "public"."v_posts" TO "service_role";

GRANT ALL ON TABLE "public"."v_tags" TO "anon";
GRANT ALL ON TABLE "public"."v_tags" TO "authenticated";
GRANT ALL ON TABLE "public"."v_tags" TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "service_role";

RESET ALL;

--
-- Dumped schema changes for auth and storage
--

