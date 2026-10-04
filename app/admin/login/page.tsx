import { redirect } from "next/navigation";
import { LoginForm } from "../../components/admin/LoginForm";
import { authConfigured, isAuthenticated } from "../../lib/admin-auth";

export const dynamic = "force-dynamic";

export default async function LoginPage() {
  if (await isAuthenticated()) redirect("/promo-codes");
  return (
    <main className="mx-auto max-w-sm px-4 py-16">
      <h1 className="text-2xl font-bold text-slate-900">
        Admin log in
      </h1>
      <p className="mt-1 text-sm text-slate-600">
        Restricted area. Authorised administrators only.
      </p>
      {authConfigured() ? (
        <LoginForm />
      ) : (
        <p className="mt-6 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
          Admin login is not configured on this server. Set ADMIN_USERNAME,
          ADMIN_PASSWORD_HASH and ADMIN_SESSION_SECRET (see
          ADMIN-SETUP.md), then restart.
        </p>
      )}
    </main>
  );
}
