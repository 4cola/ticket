create type "public"."post_status" as enum ('published', 'under_review', 'draft', 'rejected');

drop view if exists "public"."v_posts";

alter table "public"."posts" drop column "is_active";

alter table "public"."posts" add column "status" post_status not null default 'draft'::post_status;

create or replace view "public"."v_posts" as  SELECT p.id,
    p.title,
    p.excerpt,
    p.slug,
    p.featured_image,
    p.html,
    p.updated_at,
    p.created_at,
    p.status,
    COALESCE(array_agg(DISTINCT t.slug) FILTER (WHERE (t.slug IS NOT NULL)), ARRAY[]::character varying[]) AS tags,
    COALESCE(array_agg(DISTINCT c.slug) FILTER (WHERE (c.slug IS NOT NULL)), ARRAY[]::character varying[]) AS categories
   FROM ((((posts p
     LEFT JOIN posts_categories pc ON ((p.id = pc.post_id)))
     LEFT JOIN categories c ON ((pc.category_id = c.id)))
     LEFT JOIN posts_tags pt ON ((p.id = pt.post_id)))
     LEFT JOIN tags t ON ((pt.tag_id = t.id)))
  GROUP BY p.id;
