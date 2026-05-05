import { StubPage } from "../stub-page";

export const metadata = { title: "FAQs · Admin" };

export default function FaqsStub() {
  return (
    <StubPage
      title="FAQs"
      description="Manage your frequently asked questions."
      hint="Coming in Phase 2 — editable list with drag-to-reorder."
    />
  );
}
