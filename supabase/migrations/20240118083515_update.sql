drop policy "Enable read access for all users" on "public"."posts_sites";

drop policy "Enable read access for all users" on "public"."sites";

drop policy "Enable read access for all users" on "public"."sites_configs";

revoke delete on table "public"."posts_sites" from "anon";

revoke insert on table "public"."posts_sites" from "anon";

revoke references on table "public"."posts_sites" from "anon";

revoke select on table "public"."posts_sites" from "anon";

revoke trigger on table "public"."posts_sites" from "anon";

revoke truncate on table "public"."posts_sites" from "anon";

revoke update on table "public"."posts_sites" from "anon";

revoke delete on table "public"."posts_sites" from "authenticated";

revoke insert on table "public"."posts_sites" from "authenticated";

revoke references on table "public"."posts_sites" from "authenticated";

revoke select on table "public"."posts_sites" from "authenticated";

revoke trigger on table "public"."posts_sites" from "authenticated";

revoke truncate on table "public"."posts_sites" from "authenticated";

revoke update on table "public"."posts_sites" from "authenticated";

revoke delete on table "public"."posts_sites" from "service_role";

revoke insert on table "public"."posts_sites" from "service_role";

revoke references on table "public"."posts_sites" from "service_role";

revoke select on table "public"."posts_sites" from "service_role";

revoke trigger on table "public"."posts_sites" from "service_role";

revoke truncate on table "public"."posts_sites" from "service_role";

revoke update on table "public"."posts_sites" from "service_role";

revoke delete on table "public"."sites" from "anon";

revoke insert on table "public"."sites" from "anon";

revoke references on table "public"."sites" from "anon";

revoke select on table "public"."sites" from "anon";

revoke trigger on table "public"."sites" from "anon";

revoke truncate on table "public"."sites" from "anon";

revoke update on table "public"."sites" from "anon";

revoke delete on table "public"."sites" from "authenticated";

revoke insert on table "public"."sites" from "authenticated";

revoke references on table "public"."sites" from "authenticated";

revoke select on table "public"."sites" from "authenticated";

revoke trigger on table "public"."sites" from "authenticated";

revoke truncate on table "public"."sites" from "authenticated";

revoke update on table "public"."sites" from "authenticated";

revoke delete on table "public"."sites" from "service_role";

revoke insert on table "public"."sites" from "service_role";

revoke references on table "public"."sites" from "service_role";

revoke select on table "public"."sites" from "service_role";

revoke trigger on table "public"."sites" from "service_role";

revoke truncate on table "public"."sites" from "service_role";

revoke update on table "public"."sites" from "service_role";

revoke delete on table "public"."sites_configs" from "anon";

revoke insert on table "public"."sites_configs" from "anon";

revoke references on table "public"."sites_configs" from "anon";

revoke select on table "public"."sites_configs" from "anon";

revoke trigger on table "public"."sites_configs" from "anon";

revoke truncate on table "public"."sites_configs" from "anon";

revoke update on table "public"."sites_configs" from "anon";

revoke delete on table "public"."sites_configs" from "authenticated";

revoke insert on table "public"."sites_configs" from "authenticated";

revoke references on table "public"."sites_configs" from "authenticated";

revoke select on table "public"."sites_configs" from "authenticated";

revoke trigger on table "public"."sites_configs" from "authenticated";

revoke truncate on table "public"."sites_configs" from "authenticated";

revoke update on table "public"."sites_configs" from "authenticated";

revoke delete on table "public"."sites_configs" from "service_role";

revoke insert on table "public"."sites_configs" from "service_role";

revoke references on table "public"."sites_configs" from "service_role";

revoke select on table "public"."sites_configs" from "service_role";

revoke trigger on table "public"."sites_configs" from "service_role";

revoke truncate on table "public"."sites_configs" from "service_role";

revoke update on table "public"."sites_configs" from "service_role";

alter table "public"."posts_sites" drop constraint "posts_sites_post_id_fkey";

alter table "public"."posts_sites" drop constraint "posts_sites_site_id_fkey";

alter table "public"."sites" drop constraint "Site_uid_key";

alter table "public"."sites" drop constraint "sites_short_name_unique";

alter table "public"."sites_configs" drop constraint "sites_configs_site_id_fkey";

alter table "public"."sites_configs" drop constraint "sites_configs_site_id_key";

alter table "public"."posts_sites" drop constraint "posts_related_sites_pkey";

alter table "public"."sites" drop constraint "Site_pkey";

alter table "public"."sites_configs" drop constraint "sites_configs_pkey";

drop index if exists "public"."Site_pkey";

drop index if exists "public"."Site_uid_7fad8fc5_like";

drop index if exists "public"."Site_uid_key";

drop index if exists "public"."posts_related_sites_pkey";

drop index if exists "public"."sites_configs_pkey";

drop index if exists "public"."sites_configs_site_id_key";

drop index if exists "public"."sites_short_name_unique";

drop table "public"."posts_sites";

drop table "public"."sites";

drop table "public"."sites_configs";

drop sequence if exists "public"."sites_id_seq";

create policy "Enable read access for all users"
on "public"."configs"
as permissive
for select
to public
using (true);
