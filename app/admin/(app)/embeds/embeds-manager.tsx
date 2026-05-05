"use client";

import { useState, useTransition } from "react";
import { Plus, Trash2, ChevronDown, ChevronRight } from "lucide-react";
import { toast } from "sonner";

import type { Embed } from "@/lib/cms/schema";
import { Button } from "@/components/admin/ui/button";
import { Input } from "@/components/admin/ui/input";
import { Label } from "@/components/admin/ui/label";
import { Textarea } from "@/components/admin/ui/textarea";
import { Switch } from "@/components/admin/ui/switch";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/admin/ui/card";
import { cn, slugify } from "@/lib/cms/utils";
import {
  createEmbed,
  deleteEmbed,
  toggleEmbed,
  updateEmbed,
} from "./actions";

type LocalEmbed = Pick<Embed, "key" | "name" | "html" | "enabled" | "updatedAt">;

export function EmbedsManager({ initial }: { initial: Embed[] }) {
  const [items, setItems] = useState<LocalEmbed[]>(initial);
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [showCreate, setShowCreate] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end">
        <Button onClick={() => setShowCreate(true)}>
          <Plus className="h-4 w-4" />
          New embed
        </Button>
      </div>

      {showCreate ? (
        <CreateForm
          onCancel={() => setShowCreate(false)}
          onCreated={(created) => {
            setItems((prev) => [...prev, created]);
            setOpenKey(created.key);
            setShowCreate(false);
          }}
          existingKeys={items.map((i) => i.key)}
        />
      ) : null}

      {items.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center text-sm text-muted-foreground">
            No embeds yet. Create one to get started.
          </CardContent>
        </Card>
      ) : (
        items.map((embed) => (
          <EmbedCard
            key={embed.key}
            embed={embed}
            open={openKey === embed.key}
            onToggleOpen={() =>
              setOpenKey(openKey === embed.key ? null : embed.key)
            }
            onUpdate={(next) =>
              setItems((prev) =>
                prev.map((p) => (p.key === embed.key ? next : p)),
              )
            }
            onDelete={() =>
              setItems((prev) => prev.filter((p) => p.key !== embed.key))
            }
          />
        ))
      )}
    </div>
  );
}

function EmbedCard({
  embed,
  open,
  onToggleOpen,
  onUpdate,
  onDelete,
}: {
  embed: LocalEmbed;
  open: boolean;
  onToggleOpen: () => void;
  onUpdate: (next: LocalEmbed) => void;
  onDelete: () => void;
}) {
  const [name, setName] = useState(embed.name);
  const [html, setHtml] = useState(embed.html);
  const [enabled, setEnabled] = useState(embed.enabled);
  const [isPending, startTransition] = useTransition();

  function onToggleEnabled(next: boolean) {
    setEnabled(next);
    startTransition(async () => {
      const res = await toggleEmbed({ key: embed.key, enabled: next });
      if (!res.ok) {
        toast.error(res.error);
        setEnabled(!next);
        return;
      }
      onUpdate({ ...embed, enabled: next, name, html });
      toast.success(next ? "Enabled" : "Disabled");
    });
  }

  function onSave() {
    startTransition(async () => {
      const res = await updateEmbed({ key: embed.key, name, html, enabled });
      if (!res.ok) {
        toast.error(res.error);
        return;
      }
      onUpdate({ ...embed, name, html, enabled });
      toast.success("Saved");
    });
  }

  function onConfirmDelete() {
    if (!confirm(`Delete embed "${embed.name}"? This cannot be undone.`)) {
      return;
    }
    startTransition(async () => {
      const res = await deleteEmbed(embed.key);
      if (!res.ok) {
        toast.error(res.error);
        return;
      }
      onDelete();
      toast.success("Deleted");
    });
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between gap-3 space-y-0">
        <button
          type="button"
          onClick={onToggleOpen}
          className="flex flex-1 items-center gap-2 text-left"
        >
          {open ? (
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          ) : (
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          )}
          <div>
            <CardTitle className="text-base">{embed.name}</CardTitle>
            <p className="mt-1 text-xs text-muted-foreground">
              <code className="rounded bg-muted px-1 py-0.5">{embed.key}</code>
              <span className="ml-2">
                Updated{" "}
                {new Date(embed.updatedAt).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </p>
          </div>
        </button>
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "rounded-full px-2 py-0.5 text-xs font-medium",
              enabled
                ? "bg-primary/10 text-primary"
                : "bg-muted text-muted-foreground",
            )}
          >
            {enabled ? "Enabled" : "Disabled"}
          </span>
          <Switch
            checked={enabled}
            onCheckedChange={onToggleEnabled}
            disabled={isPending}
            aria-label="Toggle enabled"
          />
        </div>
      </CardHeader>
      {open ? (
        <CardContent className="flex flex-col gap-4 border-t pt-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor={`name-${embed.key}`}>Name</Label>
            <Input
              id={`name-${embed.key}`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label>Key</Label>
            <Input value={embed.key} readOnly disabled />
            <p className="text-xs text-muted-foreground">
              The key is fixed once an embed is created.
            </p>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor={`html-${embed.key}`}>HTML</Label>
            <Textarea
              id={`html-${embed.key}`}
              value={html}
              onChange={(e) => setHtml(e.target.value)}
              rows={12}
              className="font-mono text-[13px]"
              spellCheck={false}
            />
          </div>
          <div className="flex justify-between">
            <Button
              type="button"
              variant="destructive"
              onClick={onConfirmDelete}
              disabled={isPending}
            >
              <Trash2 className="h-4 w-4" />
              Delete
            </Button>
            <Button type="button" onClick={onSave} disabled={isPending}>
              {isPending ? "Saving…" : "Save"}
            </Button>
          </div>
        </CardContent>
      ) : null}
    </Card>
  );
}

function CreateForm({
  onCancel,
  onCreated,
  existingKeys,
}: {
  onCancel: () => void;
  onCreated: (e: LocalEmbed) => void;
  existingKeys: string[];
}) {
  const [name, setName] = useState("");
  const [key, setKey] = useState("");
  const [keyDirty, setKeyDirty] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const effectiveKey = keyDirty ? key : slugify(name);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!name.trim()) {
      setError("Name is required");
      return;
    }
    if (!effectiveKey) {
      setError("Key is required");
      return;
    }
    if (existingKeys.includes(effectiveKey)) {
      setError("That key already exists");
      return;
    }
    startTransition(async () => {
      const res = await createEmbed({ name: name.trim(), key: effectiveKey });
      if (!res.ok) {
        setError(res.error);
        toast.error(res.error);
        return;
      }
      onCreated({
        key: effectiveKey,
        name: name.trim(),
        html: "",
        enabled: false,
        updatedAt: new Date(),
      });
      toast.success("Created");
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">New embed</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="new-name">Name</Label>
            <Input
              id="new-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Booking calendar"
              autoFocus
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="new-key">Key</Label>
            <Input
              id="new-key"
              value={effectiveKey}
              onChange={(e) => {
                setKeyDirty(true);
                setKey(e.target.value);
              }}
              placeholder="booking-calendar"
            />
            <p className="text-xs text-muted-foreground">
              Lowercase letters, numbers, and dashes. Auto-derived from the
              name unless overridden.
            </p>
          </div>
          {error ? (
            <p className="text-xs text-destructive" role="alert">
              {error}
            </p>
          ) : null}
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Creating…" : "Create"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
