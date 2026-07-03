import * as React from "react";

import { cn } from "@/lib/utils";

/** Consistent max-width wrapper used by every section. */
export function Container({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10", className)} {...props} />
  );
}
