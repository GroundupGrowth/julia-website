import { StackHandler } from "@stackframe/stack";
import { stackServerApp } from "@/lib/cms/stack";

// Catch-all that renders Stack's hosted auth UI for sign-in, sign-up,
// password reset, email verification, OAuth callbacks, etc. Keep this
// route public — Stack ships its own gating.
export default function Handler(props: unknown) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <StackHandler fullPage app={stackServerApp} routeProps={props as any} />;
}
