import { Card, CardContent } from "@/components/admin/ui/card";

type StubPageProps = {
  title: string;
  description: string;
  hint: string;
};

export function StubPage({ title, description, hint }: StubPageProps) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <Card>
        <CardContent className="flex min-h-[240px] flex-col items-center justify-center gap-2 py-12 text-center">
          <p className="text-sm font-medium">Not yet implemented</p>
          <p className="max-w-md text-sm text-muted-foreground">{hint}</p>
        </CardContent>
      </Card>
    </div>
  );
}
