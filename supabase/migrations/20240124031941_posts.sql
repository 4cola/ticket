drop function if exists "public"."update_tag_count"();

drop view if exists "public"."v_posts";

alter table "public"."tags" drop column "count";

alter table "public"."tags" drop column "is_active";

alter table "public"."tags" drop column "order";

alter table "public"."tags" drop column "updated_at";

drop type "public"."ads_position";

drop type "public"."type";

create or replace view "public"."v_categories" as  SELECT c.id,
    c.created_at,
    c.name,
    c.slug,
    c.description,
    COALESCE(count(pc.post_id), (0)::bigint) AS count
   FROM (categories c
     LEFT JOIN posts_categories pc ON ((c.id = pc.category_id)))
  GROUP BY c.id;


create or replace view "public"."v_tags" as  SELECT t.id,
    t.created_at,
    t.name,
    t.slug,
    t.description,
    COALESCE(count(pt.post_id), (0)::bigint) AS count
   FROM (tags t
     LEFT JOIN posts_tags pt ON ((t.id = pt.tag_id)))
  GROUP BY t.id;


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
