import { StubPage } from "../stub-page";

export const metadata = { title: "Articles · Admin" };

export default function ArticlesStub() {
  return (
    <StubPage
      title="Articles"
      description="Long-form content with structured blocks."
      hint="Coming in Phase 2 — block editor, slug, cover, publish flow."
    />
  );
}
