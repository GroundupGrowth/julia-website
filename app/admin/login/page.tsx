import { Suspense } from "react";
import { redirect } from "next/navigation";

import { LoginForm } from "./login-form";
import { getSession } from "@/lib/cms/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/admin/ui/card";

export const metadata = {
  title: "Sign in · Admin",
};

// /admin/login — sign-in page. Sits OUTSIDE the (app) route group so it
// renders without the chrome.
export default async function LoginPage(props: {
  searchParams: Promise<{ from?: string }>;
}) {
  const { from } = await props.searchParams;
  const session = await getSession();

  // If already signed in, send them to wherever they were headed.
  if (session.email) {
    redirect(from || "/admin");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign in to BasePsych CMS</CardTitle>
        </CardHeader>
        <CardContent>
          <Suspense fallback={null}>
            <LoginForm from={from} />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
}
