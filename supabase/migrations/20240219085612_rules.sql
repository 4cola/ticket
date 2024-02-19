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

create policy "Enable read access for authenticated"
on "public"."groups"
as permissive
for select
to authenticated
using (true);


create policy "Enable read access for authenticated"
on "public"."groups_permissions"
as permissive
for select
to authenticated
using (true);


create policy "Enable read access for authenticated"
on "public"."permissions"
as permissive
for select
to authenticated
using (true);


create policy "Enable read access for authenticated"
on "public"."users_groups"
as permissive
for select
to authenticated
using (true);
