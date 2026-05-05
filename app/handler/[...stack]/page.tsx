import { StackHandler } from "@stackframe/stack";
import { getStackServerApp } from "@/lib/cms/stack";

// Catch-all that renders Stack's hosted auth UI for sign-in, sign-up,
// password reset, email verification, OAuth callbacks, etc.
//
// Mark dynamic so Next never tries to prerender this at build time —
// Stack reads cookies and validates env at runtime.
export const dynamic = "force-dynamic";

export default function Handler(props: unknown) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (
    <StackHandler
      fullPage
      app={getStackServerApp()}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      routeProps={props as any}
    />
  );
}
