import { StubPage } from "../stub-page";

export const metadata = { title: "Assets · Admin" };

export default function AssetsStub() {
  return (
    <StubPage
      title="Assets"
      description="Uploaded images and files."
      hint="Coming in Phase 2 — upload to Vercel Blob, alt-text editor."
    />
  );
}
