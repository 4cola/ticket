drop trigger if exists "update_name_cn_trigger" on "public"."tags";

drop policy "Enable read access for all users" on "public"."ads";

drop policy "Enable read access for all users" on "public"."cons";

drop policy "Enable read access for all users" on "public"."cryptos";

drop policy "Enable read access for all users" on "public"."delivers";

drop policy "Enable read access for all users" on "public"."filters";

drop policy "Enable read access for all users" on "public"."mails";

drop policy "Enable read access for all users" on "public"."navigations";

drop policy "Enable read access for all users" on "public"."navis";

drop policy "Enable read access for all users" on "public"."payments";

drop policy "Enable read access for all users" on "public"."promos";

drop policy "Enable read access for all users" on "public"."pros";

drop policy "Enable read access for all users" on "public"."sites_categories";

drop policy "Enable read access for all users" on "public"."sites_cons";

drop policy "Enable read access for all users" on "public"."sites_cryptos";

drop policy "Enable read access for all users" on "public"."sites_detail_posts";

drop policy "Enable read access for all users" on "public"."sites_payments";

drop policy "Enable read access for all users" on "public"."sites_pros";

drop policy "Enable read access for all users" on "public"."sites_tags";

drop policy "Enable read access for all users" on "public"."sites_tips";

revoke delete on table "public"."ads" from "anon";

revoke insert on table "public"."ads" from "anon";

revoke references on table "public"."ads" from "anon";

revoke select on table "public"."ads" from "anon";

revoke trigger on table "public"."ads" from "anon";

revoke truncate on table "public"."ads" from "anon";

revoke update on table "public"."ads" from "anon";

revoke delete on table "public"."ads" from "authenticated";

revoke insert on table "public"."ads" from "authenticated";

revoke references on table "public"."ads" from "authenticated";

revoke select on table "public"."ads" from "authenticated";

revoke trigger on table "public"."ads" from "authenticated";

revoke truncate on table "public"."ads" from "authenticated";

revoke update on table "public"."ads" from "authenticated";

revoke delete on table "public"."ads" from "service_role";

revoke insert on table "public"."ads" from "service_role";

revoke references on table "public"."ads" from "service_role";

revoke select on table "public"."ads" from "service_role";

revoke trigger on table "public"."ads" from "service_role";

revoke truncate on table "public"."ads" from "service_role";

revoke update on table "public"."ads" from "service_role";

revoke delete on table "public"."autolinks" from "anon";

revoke insert on table "public"."autolinks" from "anon";

revoke references on table "public"."autolinks" from "anon";

revoke select on table "public"."autolinks" from "anon";

revoke trigger on table "public"."autolinks" from "anon";

revoke truncate on table "public"."autolinks" from "anon";

revoke update on table "public"."autolinks" from "anon";

revoke delete on table "public"."autolinks" from "authenticated";

revoke insert on table "public"."autolinks" from "authenticated";

revoke references on table "public"."autolinks" from "authenticated";

revoke select on table "public"."autolinks" from "authenticated";

revoke trigger on table "public"."autolinks" from "authenticated";

revoke truncate on table "public"."autolinks" from "authenticated";

revoke update on table "public"."autolinks" from "authenticated";

revoke delete on table "public"."autolinks" from "service_role";

revoke insert on table "public"."autolinks" from "service_role";

revoke references on table "public"."autolinks" from "service_role";

revoke select on table "public"."autolinks" from "service_role";

revoke trigger on table "public"."autolinks" from "service_role";

revoke truncate on table "public"."autolinks" from "service_role";

revoke update on table "public"."autolinks" from "service_role";

revoke delete on table "public"."cons" from "anon";

revoke insert on table "public"."cons" from "anon";

revoke references on table "public"."cons" from "anon";

revoke select on table "public"."cons" from "anon";

revoke trigger on table "public"."cons" from "anon";

revoke truncate on table "public"."cons" from "anon";

revoke update on table "public"."cons" from "anon";

revoke delete on table "public"."cons" from "authenticated";

revoke insert on table "public"."cons" from "authenticated";

revoke references on table "public"."cons" from "authenticated";

revoke select on table "public"."cons" from "authenticated";

revoke trigger on table "public"."cons" from "authenticated";

revoke truncate on table "public"."cons" from "authenticated";

revoke update on table "public"."cons" from "authenticated";

revoke delete on table "public"."cons" from "service_role";

revoke insert on table "public"."cons" from "service_role";

revoke references on table "public"."cons" from "service_role";

revoke select on table "public"."cons" from "service_role";

revoke trigger on table "public"."cons" from "service_role";

revoke truncate on table "public"."cons" from "service_role";

revoke update on table "public"."cons" from "service_role";

revoke delete on table "public"."cryptos" from "anon";

revoke insert on table "public"."cryptos" from "anon";

revoke references on table "public"."cryptos" from "anon";

revoke select on table "public"."cryptos" from "anon";

revoke trigger on table "public"."cryptos" from "anon";

revoke truncate on table "public"."cryptos" from "anon";

revoke update on table "public"."cryptos" from "anon";

revoke delete on table "public"."cryptos" from "authenticated";

revoke insert on table "public"."cryptos" from "authenticated";

revoke references on table "public"."cryptos" from "authenticated";

revoke select on table "public"."cryptos" from "authenticated";

revoke trigger on table "public"."cryptos" from "authenticated";

revoke truncate on table "public"."cryptos" from "authenticated";

revoke update on table "public"."cryptos" from "authenticated";

revoke delete on table "public"."cryptos" from "service_role";

revoke insert on table "public"."cryptos" from "service_role";

revoke references on table "public"."cryptos" from "service_role";

revoke select on table "public"."cryptos" from "service_role";

revoke trigger on table "public"."cryptos" from "service_role";

revoke truncate on table "public"."cryptos" from "service_role";

revoke update on table "public"."cryptos" from "service_role";

revoke delete on table "public"."delivers" from "anon";

revoke insert on table "public"."delivers" from "anon";

revoke references on table "public"."delivers" from "anon";

revoke select on table "public"."delivers" from "anon";

revoke trigger on table "public"."delivers" from "anon";

revoke truncate on table "public"."delivers" from "anon";

revoke update on table "public"."delivers" from "anon";

revoke delete on table "public"."delivers" from "authenticated";

revoke insert on table "public"."delivers" from "authenticated";

revoke references on table "public"."delivers" from "authenticated";

revoke select on table "public"."delivers" from "authenticated";

revoke trigger on table "public"."delivers" from "authenticated";

revoke truncate on table "public"."delivers" from "authenticated";

revoke update on table "public"."delivers" from "authenticated";

revoke delete on table "public"."delivers" from "service_role";

revoke insert on table "public"."delivers" from "service_role";

revoke references on table "public"."delivers" from "service_role";

revoke select on table "public"."delivers" from "service_role";

revoke trigger on table "public"."delivers" from "service_role";

revoke truncate on table "public"."delivers" from "service_role";

revoke update on table "public"."delivers" from "service_role";

revoke delete on table "public"."filters" from "anon";

revoke insert on table "public"."filters" from "anon";

revoke references on table "public"."filters" from "anon";

revoke select on table "public"."filters" from "anon";

revoke trigger on table "public"."filters" from "anon";

revoke truncate on table "public"."filters" from "anon";

revoke update on table "public"."filters" from "anon";

revoke delete on table "public"."filters" from "authenticated";

revoke insert on table "public"."filters" from "authenticated";

revoke references on table "public"."filters" from "authenticated";

revoke select on table "public"."filters" from "authenticated";

revoke trigger on table "public"."filters" from "authenticated";

revoke truncate on table "public"."filters" from "authenticated";

revoke update on table "public"."filters" from "authenticated";

revoke delete on table "public"."filters" from "service_role";

revoke insert on table "public"."filters" from "service_role";

revoke references on table "public"."filters" from "service_role";

revoke select on table "public"."filters" from "service_role";

revoke trigger on table "public"."filters" from "service_role";

revoke truncate on table "public"."filters" from "service_role";

revoke update on table "public"."filters" from "service_role";

revoke delete on table "public"."mails" from "anon";

revoke insert on table "public"."mails" from "anon";

revoke references on table "public"."mails" from "anon";

revoke select on table "public"."mails" from "anon";

revoke trigger on table "public"."mails" from "anon";

revoke truncate on table "public"."mails" from "anon";

revoke update on table "public"."mails" from "anon";

revoke delete on table "public"."mails" from "authenticated";

revoke insert on table "public"."mails" from "authenticated";

revoke references on table "public"."mails" from "authenticated";

revoke select on table "public"."mails" from "authenticated";

revoke trigger on table "public"."mails" from "authenticated";

revoke truncate on table "public"."mails" from "authenticated";

revoke update on table "public"."mails" from "authenticated";

revoke delete on table "public"."mails" from "service_role";

revoke insert on table "public"."mails" from "service_role";

revoke references on table "public"."mails" from "service_role";

revoke select on table "public"."mails" from "service_role";

revoke trigger on table "public"."mails" from "service_role";

revoke truncate on table "public"."mails" from "service_role";

revoke update on table "public"."mails" from "service_role";

revoke delete on table "public"."navigations" from "anon";

revoke insert on table "public"."navigations" from "anon";

revoke references on table "public"."navigations" from "anon";

revoke select on table "public"."navigations" from "anon";

revoke trigger on table "public"."navigations" from "anon";

revoke truncate on table "public"."navigations" from "anon";

revoke update on table "public"."navigations" from "anon";

revoke delete on table "public"."navigations" from "authenticated";

revoke insert on table "public"."navigations" from "authenticated";

revoke references on table "public"."navigations" from "authenticated";

revoke select on table "public"."navigations" from "authenticated";

revoke trigger on table "public"."navigations" from "authenticated";

revoke truncate on table "public"."navigations" from "authenticated";

revoke update on table "public"."navigations" from "authenticated";

revoke delete on table "public"."navigations" from "service_role";

revoke insert on table "public"."navigations" from "service_role";

revoke references on table "public"."navigations" from "service_role";

revoke select on table "public"."navigations" from "service_role";

revoke trigger on table "public"."navigations" from "service_role";

revoke truncate on table "public"."navigations" from "service_role";

revoke update on table "public"."navigations" from "service_role";

revoke delete on table "public"."navis" from "anon";

revoke insert on table "public"."navis" from "anon";

revoke references on table "public"."navis" from "anon";

revoke select on table "public"."navis" from "anon";

revoke trigger on table "public"."navis" from "anon";

revoke truncate on table "public"."navis" from "anon";

revoke update on table "public"."navis" from "anon";

revoke delete on table "public"."navis" from "authenticated";

revoke insert on table "public"."navis" from "authenticated";

revoke references on table "public"."navis" from "authenticated";

revoke select on table "public"."navis" from "authenticated";

revoke trigger on table "public"."navis" from "authenticated";

revoke truncate on table "public"."navis" from "authenticated";

revoke update on table "public"."navis" from "authenticated";

revoke delete on table "public"."navis" from "service_role";

revoke insert on table "public"."navis" from "service_role";

revoke references on table "public"."navis" from "service_role";

revoke select on table "public"."navis" from "service_role";

revoke trigger on table "public"."navis" from "service_role";

revoke truncate on table "public"."navis" from "service_role";

revoke update on table "public"."navis" from "service_role";

revoke delete on table "public"."payments" from "anon";

revoke insert on table "public"."payments" from "anon";

revoke references on table "public"."payments" from "anon";

revoke select on table "public"."payments" from "anon";

revoke trigger on table "public"."payments" from "anon";

revoke truncate on table "public"."payments" from "anon";

revoke update on table "public"."payments" from "anon";

revoke delete on table "public"."payments" from "authenticated";

revoke insert on table "public"."payments" from "authenticated";

revoke references on table "public"."payments" from "authenticated";

revoke select on table "public"."payments" from "authenticated";

revoke trigger on table "public"."payments" from "authenticated";

revoke truncate on table "public"."payments" from "authenticated";

revoke update on table "public"."payments" from "authenticated";

revoke delete on table "public"."payments" from "service_role";

revoke insert on table "public"."payments" from "service_role";

revoke references on table "public"."payments" from "service_role";

revoke select on table "public"."payments" from "service_role";

revoke trigger on table "public"."payments" from "service_role";

revoke truncate on table "public"."payments" from "service_role";

revoke update on table "public"."payments" from "service_role";

revoke delete on table "public"."promos" from "anon";

revoke insert on table "public"."promos" from "anon";

revoke references on table "public"."promos" from "anon";

revoke select on table "public"."promos" from "anon";

revoke trigger on table "public"."promos" from "anon";

revoke truncate on table "public"."promos" from "anon";

revoke update on table "public"."promos" from "anon";

revoke delete on table "public"."promos" from "authenticated";

revoke insert on table "public"."promos" from "authenticated";

revoke references on table "public"."promos" from "authenticated";

revoke select on table "public"."promos" from "authenticated";

revoke trigger on table "public"."promos" from "authenticated";

revoke truncate on table "public"."promos" from "authenticated";

revoke update on table "public"."promos" from "authenticated";

revoke delete on table "public"."promos" from "service_role";

revoke insert on table "public"."promos" from "service_role";

revoke references on table "public"."promos" from "service_role";

revoke select on table "public"."promos" from "service_role";

revoke trigger on table "public"."promos" from "service_role";

revoke truncate on table "public"."promos" from "service_role";

revoke update on table "public"."promos" from "service_role";

revoke delete on table "public"."pros" from "anon";

revoke insert on table "public"."pros" from "anon";

revoke references on table "public"."pros" from "anon";

revoke select on table "public"."pros" from "anon";

revoke trigger on table "public"."pros" from "anon";

revoke truncate on table "public"."pros" from "anon";

revoke update on table "public"."pros" from "anon";

revoke delete on table "public"."pros" from "authenticated";

revoke insert on table "public"."pros" from "authenticated";

revoke references on table "public"."pros" from "authenticated";

revoke select on table "public"."pros" from "authenticated";

revoke trigger on table "public"."pros" from "authenticated";

revoke truncate on table "public"."pros" from "authenticated";

revoke update on table "public"."pros" from "authenticated";

revoke delete on table "public"."pros" from "service_role";

revoke insert on table "public"."pros" from "service_role";

revoke references on table "public"."pros" from "service_role";

revoke select on table "public"."pros" from "service_role";

revoke trigger on table "public"."pros" from "service_role";

revoke truncate on table "public"."pros" from "service_role";

revoke update on table "public"."pros" from "service_role";

revoke delete on table "public"."sites_categories" from "anon";

revoke insert on table "public"."sites_categories" from "anon";

revoke references on table "public"."sites_categories" from "anon";

revoke select on table "public"."sites_categories" from "anon";

revoke trigger on table "public"."sites_categories" from "anon";

revoke truncate on table "public"."sites_categories" from "anon";

revoke update on table "public"."sites_categories" from "anon";

revoke delete on table "public"."sites_categories" from "authenticated";

revoke insert on table "public"."sites_categories" from "authenticated";

revoke references on table "public"."sites_categories" from "authenticated";

revoke select on table "public"."sites_categories" from "authenticated";

revoke trigger on table "public"."sites_categories" from "authenticated";

revoke truncate on table "public"."sites_categories" from "authenticated";

revoke update on table "public"."sites_categories" from "authenticated";

revoke delete on table "public"."sites_categories" from "service_role";

revoke insert on table "public"."sites_categories" from "service_role";

revoke references on table "public"."sites_categories" from "service_role";

revoke select on table "public"."sites_categories" from "service_role";

revoke trigger on table "public"."sites_categories" from "service_role";

revoke truncate on table "public"."sites_categories" from "service_role";

revoke update on table "public"."sites_categories" from "service_role";

revoke delete on table "public"."sites_cons" from "anon";

revoke insert on table "public"."sites_cons" from "anon";

revoke references on table "public"."sites_cons" from "anon";

revoke select on table "public"."sites_cons" from "anon";

revoke trigger on table "public"."sites_cons" from "anon";

revoke truncate on table "public"."sites_cons" from "anon";

revoke update on table "public"."sites_cons" from "anon";

revoke delete on table "public"."sites_cons" from "authenticated";

revoke insert on table "public"."sites_cons" from "authenticated";

revoke references on table "public"."sites_cons" from "authenticated";

revoke select on table "public"."sites_cons" from "authenticated";

revoke trigger on table "public"."sites_cons" from "authenticated";

revoke truncate on table "public"."sites_cons" from "authenticated";

revoke update on table "public"."sites_cons" from "authenticated";

revoke delete on table "public"."sites_cons" from "service_role";

revoke insert on table "public"."sites_cons" from "service_role";

revoke references on table "public"."sites_cons" from "service_role";

revoke select on table "public"."sites_cons" from "service_role";

revoke trigger on table "public"."sites_cons" from "service_role";

revoke truncate on table "public"."sites_cons" from "service_role";

revoke update on table "public"."sites_cons" from "service_role";

revoke delete on table "public"."sites_cryptos" from "anon";

revoke insert on table "public"."sites_cryptos" from "anon";

revoke references on table "public"."sites_cryptos" from "anon";

revoke select on table "public"."sites_cryptos" from "anon";

revoke trigger on table "public"."sites_cryptos" from "anon";

revoke truncate on table "public"."sites_cryptos" from "anon";

revoke update on table "public"."sites_cryptos" from "anon";

revoke delete on table "public"."sites_cryptos" from "authenticated";

revoke insert on table "public"."sites_cryptos" from "authenticated";

revoke references on table "public"."sites_cryptos" from "authenticated";

revoke select on table "public"."sites_cryptos" from "authenticated";

revoke trigger on table "public"."sites_cryptos" from "authenticated";

revoke truncate on table "public"."sites_cryptos" from "authenticated";

revoke update on table "public"."sites_cryptos" from "authenticated";

revoke delete on table "public"."sites_cryptos" from "service_role";

revoke insert on table "public"."sites_cryptos" from "service_role";

revoke references on table "public"."sites_cryptos" from "service_role";

revoke select on table "public"."sites_cryptos" from "service_role";

revoke trigger on table "public"."sites_cryptos" from "service_role";

revoke truncate on table "public"."sites_cryptos" from "service_role";

revoke update on table "public"."sites_cryptos" from "service_role";

revoke delete on table "public"."sites_detail_posts" from "anon";

revoke insert on table "public"."sites_detail_posts" from "anon";

revoke references on table "public"."sites_detail_posts" from "anon";

revoke select on table "public"."sites_detail_posts" from "anon";

revoke trigger on table "public"."sites_detail_posts" from "anon";

revoke truncate on table "public"."sites_detail_posts" from "anon";

revoke update on table "public"."sites_detail_posts" from "anon";

revoke delete on table "public"."sites_detail_posts" from "authenticated";

revoke insert on table "public"."sites_detail_posts" from "authenticated";

revoke references on table "public"."sites_detail_posts" from "authenticated";

revoke select on table "public"."sites_detail_posts" from "authenticated";

revoke trigger on table "public"."sites_detail_posts" from "authenticated";

revoke truncate on table "public"."sites_detail_posts" from "authenticated";

revoke update on table "public"."sites_detail_posts" from "authenticated";

revoke delete on table "public"."sites_detail_posts" from "service_role";

revoke insert on table "public"."sites_detail_posts" from "service_role";

revoke references on table "public"."sites_detail_posts" from "service_role";

revoke select on table "public"."sites_detail_posts" from "service_role";

revoke trigger on table "public"."sites_detail_posts" from "service_role";

revoke truncate on table "public"."sites_detail_posts" from "service_role";

revoke update on table "public"."sites_detail_posts" from "service_role";

revoke delete on table "public"."sites_payments" from "anon";

revoke insert on table "public"."sites_payments" from "anon";

revoke references on table "public"."sites_payments" from "anon";

revoke select on table "public"."sites_payments" from "anon";

revoke trigger on table "public"."sites_payments" from "anon";

revoke truncate on table "public"."sites_payments" from "anon";

revoke update on table "public"."sites_payments" from "anon";

revoke delete on table "public"."sites_payments" from "authenticated";

revoke insert on table "public"."sites_payments" from "authenticated";

revoke references on table "public"."sites_payments" from "authenticated";

revoke select on table "public"."sites_payments" from "authenticated";

revoke trigger on table "public"."sites_payments" from "authenticated";

revoke truncate on table "public"."sites_payments" from "authenticated";

revoke update on table "public"."sites_payments" from "authenticated";

revoke delete on table "public"."sites_payments" from "service_role";

revoke insert on table "public"."sites_payments" from "service_role";

revoke references on table "public"."sites_payments" from "service_role";

revoke select on table "public"."sites_payments" from "service_role";

revoke trigger on table "public"."sites_payments" from "service_role";

revoke truncate on table "public"."sites_payments" from "service_role";

revoke update on table "public"."sites_payments" from "service_role";

revoke delete on table "public"."sites_pros" from "anon";

revoke insert on table "public"."sites_pros" from "anon";

revoke references on table "public"."sites_pros" from "anon";

revoke select on table "public"."sites_pros" from "anon";

revoke trigger on table "public"."sites_pros" from "anon";

revoke truncate on table "public"."sites_pros" from "anon";

revoke update on table "public"."sites_pros" from "anon";

revoke delete on table "public"."sites_pros" from "authenticated";

revoke insert on table "public"."sites_pros" from "authenticated";

revoke references on table "public"."sites_pros" from "authenticated";

revoke select on table "public"."sites_pros" from "authenticated";

revoke trigger on table "public"."sites_pros" from "authenticated";

revoke truncate on table "public"."sites_pros" from "authenticated";

revoke update on table "public"."sites_pros" from "authenticated";

revoke delete on table "public"."sites_pros" from "service_role";

revoke insert on table "public"."sites_pros" from "service_role";

revoke references on table "public"."sites_pros" from "service_role";

revoke select on table "public"."sites_pros" from "service_role";

revoke trigger on table "public"."sites_pros" from "service_role";

revoke truncate on table "public"."sites_pros" from "service_role";

revoke update on table "public"."sites_pros" from "service_role";

revoke delete on table "public"."sites_tags" from "anon";

revoke insert on table "public"."sites_tags" from "anon";

revoke references on table "public"."sites_tags" from "anon";

revoke select on table "public"."sites_tags" from "anon";

revoke trigger on table "public"."sites_tags" from "anon";

revoke truncate on table "public"."sites_tags" from "anon";

revoke update on table "public"."sites_tags" from "anon";

revoke delete on table "public"."sites_tags" from "authenticated";

revoke insert on table "public"."sites_tags" from "authenticated";

revoke references on table "public"."sites_tags" from "authenticated";

revoke select on table "public"."sites_tags" from "authenticated";

revoke trigger on table "public"."sites_tags" from "authenticated";

revoke truncate on table "public"."sites_tags" from "authenticated";

revoke update on table "public"."sites_tags" from "authenticated";

revoke delete on table "public"."sites_tags" from "service_role";

revoke insert on table "public"."sites_tags" from "service_role";

revoke references on table "public"."sites_tags" from "service_role";

revoke select on table "public"."sites_tags" from "service_role";

revoke trigger on table "public"."sites_tags" from "service_role";

revoke truncate on table "public"."sites_tags" from "service_role";

revoke update on table "public"."sites_tags" from "service_role";

revoke delete on table "public"."sites_tips" from "anon";

revoke insert on table "public"."sites_tips" from "anon";

revoke references on table "public"."sites_tips" from "anon";

revoke select on table "public"."sites_tips" from "anon";

revoke trigger on table "public"."sites_tips" from "anon";

revoke truncate on table "public"."sites_tips" from "anon";

revoke update on table "public"."sites_tips" from "anon";

revoke delete on table "public"."sites_tips" from "authenticated";

revoke insert on table "public"."sites_tips" from "authenticated";

revoke references on table "public"."sites_tips" from "authenticated";

revoke select on table "public"."sites_tips" from "authenticated";

revoke trigger on table "public"."sites_tips" from "authenticated";

revoke truncate on table "public"."sites_tips" from "authenticated";

revoke update on table "public"."sites_tips" from "authenticated";

revoke delete on table "public"."sites_tips" from "service_role";

revoke insert on table "public"."sites_tips" from "service_role";

revoke references on table "public"."sites_tips" from "service_role";

revoke select on table "public"."sites_tips" from "service_role";

revoke trigger on table "public"."sites_tips" from "service_role";

revoke truncate on table "public"."sites_tips" from "service_role";

revoke update on table "public"."sites_tips" from "service_role";

revoke delete on table "public"."sites_visits" from "anon";

revoke insert on table "public"."sites_visits" from "anon";

revoke references on table "public"."sites_visits" from "anon";

revoke select on table "public"."sites_visits" from "anon";

revoke trigger on table "public"."sites_visits" from "anon";

revoke truncate on table "public"."sites_visits" from "anon";

revoke update on table "public"."sites_visits" from "anon";

revoke delete on table "public"."sites_visits" from "authenticated";

revoke insert on table "public"."sites_visits" from "authenticated";

revoke references on table "public"."sites_visits" from "authenticated";

revoke select on table "public"."sites_visits" from "authenticated";

revoke trigger on table "public"."sites_visits" from "authenticated";

revoke truncate on table "public"."sites_visits" from "authenticated";

revoke update on table "public"."sites_visits" from "authenticated";

revoke delete on table "public"."sites_visits" from "service_role";

revoke insert on table "public"."sites_visits" from "service_role";

revoke references on table "public"."sites_visits" from "service_role";

revoke select on table "public"."sites_visits" from "service_role";

revoke trigger on table "public"."sites_visits" from "service_role";

revoke truncate on table "public"."sites_visits" from "service_role";

revoke update on table "public"."sites_visits" from "service_role";

alter table "public"."ads" drop constraint "ads_site_id_fkey";

alter table "public"."autolinks" drop constraint "autolinks_keyword_key";

alter table "public"."delivers" drop constraint "delivers_mail_id_9875fa82_fk_tmr_mail_id";

alter table "public"."delivers" drop constraint "delivers_site_id_228028f3_fk_sites_id";

alter table "public"."filters" drop constraint "filters_navigation_id_fkey";

alter table "public"."filters" drop constraint "filters_tag1_id_fkey";

alter table "public"."filters" drop constraint "filters_tag2_id_fkey";

alter table "public"."navis" drop constraint "navis_deliver_id_fkey";

alter table "public"."promos" drop constraint "promos_site_id_fkey";

alter table "public"."promos" drop constraint "promos_uid_key";

alter table "public"."sites_categories" drop constraint "sites_categories_category_id_fkey";

alter table "public"."sites_categories" drop constraint "sites_categories_site_id_fkey";

alter table "public"."sites_cons" drop constraint "sites_cons_con_id_fkey";

alter table "public"."sites_cons" drop constraint "sites_cons_site_id_fkey";

alter table "public"."sites_cryptos" drop constraint "sites_cryptos_crypto_id_fkey";

alter table "public"."sites_cryptos" drop constraint "sites_cryptos_site_id_fkey";

alter table "public"."sites_detail_posts" drop constraint "sites_detail_posts_post_id_fkey";

alter table "public"."sites_detail_posts" drop constraint "sites_detail_posts_site_id_fkey";

alter table "public"."sites_payments" drop constraint "sites_payments_payment_id_fkey";

alter table "public"."sites_payments" drop constraint "sites_payments_site_id_fkey";

alter table "public"."sites_pros" drop constraint "sites_pros_pro_id_fkey";

alter table "public"."sites_pros" drop constraint "sites_pros_site_id_fkey";

alter table "public"."sites_tags" drop constraint "sites_tags_site_id_fkey";

alter table "public"."sites_tags" drop constraint "sites_tags_tag_id_fkey";

alter table "public"."sites_tips" drop constraint "sites_tips_site_id_fkey";

alter table "public"."sites_visits" drop constraint "sites_visits_site_id_fkey";

drop view if exists "public"."v_posts";

drop view if exists "public"."v_sites";

alter table "public"."ads" drop constraint "ads_pkey";

alter table "public"."autolinks" drop constraint "autolinks_pkey";

alter table "public"."cons" drop constraint "cons_pkey";

alter table "public"."cryptos" drop constraint "Crypto_pkey";

alter table "public"."delivers" drop constraint "delivers_pkey";

alter table "public"."filters" drop constraint "Filter_pkey";

alter table "public"."mails" drop constraint "tmr_mail_pkey";

alter table "public"."navigations" drop constraint "Navigation_pkey";

alter table "public"."navis" drop constraint "navis_pkey";

alter table "public"."payments" drop constraint "payments_pkey";

alter table "public"."promos" drop constraint "promos_pkey";

alter table "public"."pros" drop constraint "pros_pkey";

alter table "public"."sites_categories" drop constraint "sites_categories_pkey";

alter table "public"."sites_cons" drop constraint "sites_cons_pkey";

alter table "public"."sites_cryptos" drop constraint "sites_cryptos_pkey";

alter table "public"."sites_detail_posts" drop constraint "sites_detail_posts_pkey";

alter table "public"."sites_payments" drop constraint "sites_payments_pkey";

alter table "public"."sites_pros" drop constraint "sites_pros_pkey";

alter table "public"."sites_tags" drop constraint "sites_tags_pkey";

alter table "public"."sites_tips" drop constraint "sites_tips_pkey";

alter table "public"."sites_visits" drop constraint "sites_visits_pkey";

drop index if exists "public"."Crypto_pkey";

drop index if exists "public"."Filter_navigation_id_532b6598";

drop index if exists "public"."Filter_pkey";

drop index if exists "public"."Filter_tag1_id_b3dada88";

drop index if exists "public"."Filter_tag2_id_135903aa";

drop index if exists "public"."Navigation_pkey";

drop index if exists "public"."ads_pkey";

drop index if exists "public"."autolinks_keyword_key";

drop index if exists "public"."autolinks_pkey";

drop index if exists "public"."cons_pkey";

drop index if exists "public"."delivers_mail_id_9875fa82";

drop index if exists "public"."delivers_pkey";

drop index if exists "public"."delivers_site_id_228028f3";

drop index if exists "public"."navis_deliver_id_7014b881";

drop index if exists "public"."navis_pkey";

drop index if exists "public"."payments_pkey";

drop index if exists "public"."promos_pkey";

drop index if exists "public"."promos_site_id_ddece13b";

drop index if exists "public"."promos_uid_91c375e6_like";

drop index if exists "public"."promos_uid_key";

drop index if exists "public"."pros_pkey";

drop index if exists "public"."sites_categories_pkey";

drop index if exists "public"."sites_cons_pkey";

drop index if exists "public"."sites_cryptos_pkey";

drop index if exists "public"."sites_detail_posts_pkey";

drop index if exists "public"."sites_payments_pkey";

drop index if exists "public"."sites_pros_pkey";

drop index if exists "public"."sites_tags_pkey";

drop index if exists "public"."sites_tips_pkey";

drop index if exists "public"."sites_visits_pkey";

drop index if exists "public"."tmr_mail_pkey";

drop table "public"."ads";

drop table "public"."autolinks";

drop table "public"."cons";

drop table "public"."cryptos";

drop table "public"."delivers";

drop table "public"."filters";

drop table "public"."mails";

drop table "public"."navigations";

drop table "public"."navis";

drop table "public"."payments";

drop table "public"."promos";

drop table "public"."pros";

drop table "public"."sites_categories";

drop table "public"."sites_cons";

drop table "public"."sites_cryptos";

drop table "public"."sites_detail_posts";

drop table "public"."sites_payments";

drop table "public"."sites_pros";

drop table "public"."sites_tags";

drop table "public"."sites_tips";

drop table "public"."sites_visits";

drop sequence if exists "public"."cryptos_id_seq";

drop sequence if exists "public"."delivers_id_seq";

drop sequence if exists "public"."filters_id_seq";

drop sequence if exists "public"."navigations_id_seq";

drop sequence if exists "public"."navis_id_seq";

drop sequence if exists "public"."promos_id_seq";

drop sequence if exists "public"."tmr_mail_id_seq";
