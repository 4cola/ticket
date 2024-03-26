drop policy "Enable insert for authenticated users only" on "public"."posts";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.has_permission(uid uuid, tbname character varying, opr crud)
 RETURNS boolean
 LANGUAGE plpgsql
AS $function$DECLARE
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
$function$
;

create policy "Enable delete for users based on permissions"
on "public"."posts"
as permissive
for delete
to public
using (has_permission(auth.uid(), 'posts'::character varying, 'delete'::crud));


create policy "Enable insert for authenticated users only on permissions"
on "public"."posts"
as permissive
for insert
to authenticated
with check (has_permission(auth.uid(), 'posts'::character varying, 'create'::crud));


create policy "Enable update for users based on permissions"
on "public"."posts"
as permissive
for update
to public
using (has_permission(auth.uid(), 'posts'::character varying, 'update'::crud))
with check (has_permission(auth.uid(), 'posts'::character varying, 'update'::crud));
