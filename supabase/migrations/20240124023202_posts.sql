alter table "public"."posts" drop constraint "posts_pkey";

drop index if exists "public"."posts_pkey";

ALTER TABLE "public"."posts" DROP COLUMN "id";

ALTER TABLE "public"."posts" RENAME COLUMN "id2" TO "id";
ALTER TABLE "public"."posts" ADD PRIMARY KEY ("id");

CREATE UNIQUE INDEX posts_categories_pkey ON public.posts_categories USING btree (category_id);

alter table "public"."posts_categories" add constraint "posts_categories_pkey" PRIMARY KEY using index "posts_categories_pkey";
