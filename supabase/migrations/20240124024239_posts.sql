alter table "public"."posts_categories" drop constraint "posts_categories_pkey";

drop index if exists "public"."posts_categories_pkey";

alter table "public"."posts_categories" add column "post_id" bigint not null;

alter table "public"."posts_raw" add column "post_id" bigint;

alter table "public"."posts_tags" add column "post_id" bigint not null;

CREATE UNIQUE INDEX posts_tags_pkey ON public.posts_tags USING btree (tag_id, post_id);

CREATE UNIQUE INDEX posts_categories_pkey ON public.posts_categories USING btree (category_id, post_id);

alter table "public"."posts_tags" add constraint "posts_tags_pkey" PRIMARY KEY using index "posts_tags_pkey";

alter table "public"."posts_categories" add constraint "posts_categories_pkey" PRIMARY KEY using index "posts_categories_pkey";

alter table "public"."posts_categories" add constraint "posts_categories_post_id_fkey" FOREIGN KEY (post_id) REFERENCES posts(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."posts_categories" validate constraint "posts_categories_post_id_fkey";

alter table "public"."posts_raw" add constraint "posts_raw_post_id_fkey" FOREIGN KEY (post_id) REFERENCES posts(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."posts_raw" validate constraint "posts_raw_post_id_fkey";

alter table "public"."posts_tags" add constraint "posts_tags_post_id_fkey" FOREIGN KEY (post_id) REFERENCES posts(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."posts_tags" validate constraint "posts_tags_post_id_fkey";

create or replace view "public"."v_posts" as  SELECT p.id,
    p.title,
    p.excerpt,
    p.slug,
    p.featured_image,
    p.is_active,
    p.html,
    p.updated_at,
    p.created_at,
    COALESCE(array_agg(DISTINCT t.slug) FILTER (WHERE (t.slug IS NOT NULL)), ARRAY[]::character varying[]) AS tags,
    COALESCE(array_agg(DISTINCT c.slug) FILTER (WHERE (c.slug IS NOT NULL)), ARRAY[]::character varying[]) AS categories
   FROM ((((posts p
     LEFT JOIN posts_categories pc ON ((p.id = pc.post_id)))
     LEFT JOIN categories c ON ((pc.category_id = c.id)))
     LEFT JOIN posts_tags pt ON ((p.id = pt.post_id)))
     LEFT JOIN tags t ON ((pt.tag_id = t.id)))
  GROUP BY p.id;
