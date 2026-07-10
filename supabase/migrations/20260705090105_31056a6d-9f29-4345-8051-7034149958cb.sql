
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated, service_role;

DROP POLICY "leads anyone can submit" ON public.leads;
CREATE POLICY "leads anyone can submit" ON public.leads FOR INSERT WITH CHECK (length(coalesce(name,'')) > 0);
