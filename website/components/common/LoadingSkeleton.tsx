import { cn } from "@/lib/utils";

export function LoadingSkeleton({ className }: { className?: string }) {
  return <div className={cn("animate-pulse rounded-xl bg-muted", className)} aria-hidden="true" />;
}

export function CardSkeleton() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <LoadingSkeleton className="mb-4 h-10 w-10 rounded-full" />
      <LoadingSkeleton className="mb-3 h-6 w-2/3" />
      <LoadingSkeleton className="mb-2 h-4 w-full" />
      <LoadingSkeleton className="h-4 w-4/5" />
    </div>
  );
}

export function PageSkeleton() {
  return (
    <div className="space-y-8 py-16">
      <LoadingSkeleton className="mx-auto h-10 w-64" />
      <LoadingSkeleton className="mx-auto h-5 w-96 max-w-full" />
      <div className="grid gap-6 md:grid-cols-3">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
}
