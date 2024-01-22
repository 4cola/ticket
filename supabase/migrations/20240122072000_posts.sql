create table "public"."posts_categories" (
    "created_at" timestamp with time zone not null default now(),
    "post_id" uuid not null,
    "category_id" bigint not null
);


alter table "public"."posts_categories" enable row level security;

create table "public"."posts_tags" (
    "created_at" timestamp with time zone not null default now(),
    "post_id" uuid not null,
    "tag_id" bigint not null
);


alter table "public"."posts_tags" enable row level security;

CREATE UNIQUE INDEX posts_categories_pkey ON public.posts_categories USING btree (post_id, category_id);

CREATE UNIQUE INDEX posts_tags_pkey ON public.posts_tags USING btree (post_id, tag_id);

alter table "public"."posts_categories" add constraint "posts_categories_pkey" PRIMARY KEY using index "posts_categories_pkey";

alter table "public"."posts_tags" add constraint "posts_tags_pkey" PRIMARY KEY using index "posts_tags_pkey";

alter table "public"."posts_categories" add constraint "posts_categories_category_id_fkey" FOREIGN KEY (category_id) REFERENCES categories(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."posts_categories" validate constraint "posts_categories_category_id_fkey";

alter table "public"."posts_categories" add constraint "posts_categories_post_id_fkey" FOREIGN KEY (post_id) REFERENCES posts(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."posts_categories" validate constraint "posts_categories_post_id_fkey";

alter table "public"."posts_tags" add constraint "posts_tags_post_id_fkey" FOREIGN KEY (post_id) REFERENCES posts(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."posts_tags" validate constraint "posts_tags_post_id_fkey";

alter table "public"."posts_tags" add constraint "posts_tags_tag_id_fkey" FOREIGN KEY (tag_id) REFERENCES tags(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."posts_tags" validate constraint "posts_tags_tag_id_fkey";

create or replace view "public"."v_posts" as  SELECT p.id,
    p.title,
    p.excerpt,
    p.slug,
    p.featured_image,
    p.is_active,
    p.html,
    p.updated_at,
    p.created_at,
    array_agg(t.slug) AS tags,
    array_agg(c.slug) AS categories
   FROM ((((posts p
     LEFT JOIN posts_categories pc ON ((p.id = pc.post_id)))
     LEFT JOIN categories c ON ((pc.category_id = c.id)))
     LEFT JOIN posts_tags pt ON ((p.id = pt.post_id)))
     LEFT JOIN tags t ON ((pt.tag_id = t.id)))
  GROUP BY p.id;


grant delete on table "public"."posts_categories" to "anon";

grant insert on table "public"."posts_categories" to "anon";

grant references on table "public"."posts_categories" to "anon";

grant select on table "public"."posts_categories" to "anon";

grant trigger on table "public"."posts_categories" to "anon";

grant truncate on table "public"."posts_categories" to "anon";

grant update on table "public"."posts_categories" to "anon";

grant delete on table "public"."posts_categories" to "authenticated";

grant insert on table "public"."posts_categories" to "authenticated";

grant references on table "public"."posts_categories" to "authenticated";

grant select on table "public"."posts_categories" to "authenticated";

grant trigger on table "public"."posts_categories" to "authenticated";

grant truncate on table "public"."posts_categories" to "authenticated";

grant update on table "public"."posts_categories" to "authenticated";

grant delete on table "public"."posts_categories" to "service_role";

grant insert on table "public"."posts_categories" to "service_role";

grant references on table "public"."posts_categories" to "service_role";

grant select on table "public"."posts_categories" to "service_role";

grant trigger on table "public"."posts_categories" to "service_role";

grant truncate on table "public"."posts_categories" to "service_role";

grant update on table "public"."posts_categories" to "service_role";

grant delete on table "public"."posts_tags" to "anon";

grant insert on table "public"."posts_tags" to "anon";

grant references on table "public"."posts_tags" to "anon";

grant select on table "public"."posts_tags" to "anon";

grant trigger on table "public"."posts_tags" to "anon";

grant truncate on table "public"."posts_tags" to "anon";

grant update on table "public"."posts_tags" to "anon";

grant delete on table "public"."posts_tags" to "authenticated";

grant insert on table "public"."posts_tags" to "authenticated";

grant references on table "public"."posts_tags" to "authenticated";

grant select on table "public"."posts_tags" to "authenticated";

grant trigger on table "public"."posts_tags" to "authenticated";

grant truncate on table "public"."posts_tags" to "authenticated";

grant update on table "public"."posts_tags" to "authenticated";

grant delete on table "public"."posts_tags" to "service_role";

grant insert on table "public"."posts_tags" to "service_role";

grant references on table "public"."posts_tags" to "service_role";

grant select on table "public"."posts_tags" to "service_role";

grant trigger on table "public"."posts_tags" to "service_role";

grant truncate on table "public"."posts_tags" to "service_role";

grant update on table "public"."posts_tags" to "service_role";

create policy "Enable read access for all users"
on "public"."posts_categories"
as permissive
for select
to public
using (true);


create policy "Enable read access for all users"
on "public"."posts_tags"
as permissive
for select
to public
using (true);
