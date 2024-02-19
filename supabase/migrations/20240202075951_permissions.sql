create type "public"."crud" as enum ('create', 'read', 'update', 'delete');

create table "public"."groups_permissions" (
    "group_id" bigint not null,
    "permission_id" bigint not null,
    "created_at" timestamp with time zone not null default now()
);


alter table "public"."groups_permissions" enable row level security;

create table "public"."permissions" (
    "id" bigint generated by default as identity not null,
    "operation" crud not null default 'read'::crud,
    "table_name" character varying not null default ''::character varying,
    "created_at" timestamp with time zone not null default now()
);


alter table "public"."permissions" enable row level security;

CREATE UNIQUE INDEX groups_permissions_pkey ON public.groups_permissions USING btree (group_id, permission_id);

CREATE UNIQUE INDEX permissions_pkey ON public.permissions USING btree (id);

alter table "public"."groups_permissions" add constraint "groups_permissions_pkey" PRIMARY KEY using index "groups_permissions_pkey";

alter table "public"."permissions" add constraint "permissions_pkey" PRIMARY KEY using index "permissions_pkey";

alter table "public"."groups_permissions" add constraint "groups_permissions_group_id_fkey" FOREIGN KEY (group_id) REFERENCES groups(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."groups_permissions" validate constraint "groups_permissions_group_id_fkey";

alter table "public"."groups_permissions" add constraint "groups_permissions_permission_id_fkey" FOREIGN KEY (permission_id) REFERENCES permissions(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."groups_permissions" validate constraint "groups_permissions_permission_id_fkey";

grant delete on table "public"."groups_permissions" to "anon";

grant insert on table "public"."groups_permissions" to "anon";

grant references on table "public"."groups_permissions" to "anon";

grant select on table "public"."groups_permissions" to "anon";

grant trigger on table "public"."groups_permissions" to "anon";

grant truncate on table "public"."groups_permissions" to "anon";

grant update on table "public"."groups_permissions" to "anon";

grant delete on table "public"."groups_permissions" to "authenticated";

grant insert on table "public"."groups_permissions" to "authenticated";

grant references on table "public"."groups_permissions" to "authenticated";

grant select on table "public"."groups_permissions" to "authenticated";

grant trigger on table "public"."groups_permissions" to "authenticated";

grant truncate on table "public"."groups_permissions" to "authenticated";

grant update on table "public"."groups_permissions" to "authenticated";

grant delete on table "public"."groups_permissions" to "service_role";

grant insert on table "public"."groups_permissions" to "service_role";

grant references on table "public"."groups_permissions" to "service_role";

grant select on table "public"."groups_permissions" to "service_role";

grant trigger on table "public"."groups_permissions" to "service_role";

grant truncate on table "public"."groups_permissions" to "service_role";

grant update on table "public"."groups_permissions" to "service_role";

grant delete on table "public"."permissions" to "anon";

grant insert on table "public"."permissions" to "anon";

grant references on table "public"."permissions" to "anon";

grant select on table "public"."permissions" to "anon";

grant trigger on table "public"."permissions" to "anon";

grant truncate on table "public"."permissions" to "anon";

grant update on table "public"."permissions" to "anon";

grant delete on table "public"."permissions" to "authenticated";

grant insert on table "public"."permissions" to "authenticated";

grant references on table "public"."permissions" to "authenticated";

grant select on table "public"."permissions" to "authenticated";

grant trigger on table "public"."permissions" to "authenticated";

grant truncate on table "public"."permissions" to "authenticated";

grant update on table "public"."permissions" to "authenticated";

grant delete on table "public"."permissions" to "service_role";

grant insert on table "public"."permissions" to "service_role";

grant references on table "public"."permissions" to "service_role";

grant select on table "public"."permissions" to "service_role";

grant trigger on table "public"."permissions" to "service_role";

grant truncate on table "public"."permissions" to "service_role";

grant update on table "public"."permissions" to "service_role";