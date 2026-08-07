"use client";

import dynamic from "next/dynamic";

const PharmacyScene = dynamic(() => import("./PharmacyScene").then((m) => m.PharmacyScene), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse rounded-3xl bg-muted/50" />,
});

export function PharmacyScene3D({ className }: { className?: string }) {
  return (
    <div className={className}>
      <PharmacyScene />
    </div>
  );
}
