create policy "Give access to a folder 1ffg0oo_0"
on "storage"."objects"
as permissive
for select
to authenticated
using (((bucket_id = 'images'::text) AND ((storage.foldername(name))[1] = 'uploads'::text) AND ((storage.foldername(name))[2] = 'avatars'::text) AND ((auth.uid())::text = owner_id)));


create policy "Give access to a folder 1ffg0oo_1"
on "storage"."objects"
as permissive
for insert
to authenticated
with check (((bucket_id = 'images'::text) AND ((storage.foldername(name))[1] = 'uploads'::text) AND ((storage.foldername(name))[2] = 'avatars'::text) AND ((auth.uid())::text = owner_id)));


create policy "Give access to a folder 1ffg0oo_2"
on "storage"."objects"
as permissive
for update
to authenticated
using (((bucket_id = 'images'::text) AND ((storage.foldername(name))[1] = 'uploads'::text) AND ((storage.foldername(name))[2] = 'avatars'::text) AND ((auth.uid())::text = owner_id)));


create policy "Give access to a folder 1ffg0oo_3"
on "storage"."objects"
as permissive
for delete
to authenticated
using (((bucket_id = 'images'::text) AND ((storage.foldername(name))[1] = 'uploads'::text) AND ((storage.foldername(name))[2] = 'avatars'::text) AND ((auth.uid())::text = owner_id)));
