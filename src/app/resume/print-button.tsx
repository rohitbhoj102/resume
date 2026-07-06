"use client";

import { ArrowLeft, Download, Printer } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

/** Toolbar shown on screen only — hidden when printing. */
export function ResumeToolbar() {
  return (
    <div className="mx-auto mb-6 flex w-full max-w-3xl items-center justify-between gap-3 print:hidden">
      <Button variant="ghost" size="sm" asChild>
        <Link href="/">
          <ArrowLeft /> Back to portfolio
        </Link>
      </Button>
      <div className="flex gap-2">
        <Button variant="outline" size="sm" asChild>
          <a href={siteConfig.resumeFile} download>
            <Download /> PDF
          </a>
        </Button>
        <Button size="sm" onClick={() => window.print()}>
          <Printer /> Print
        </Button>
      </div>
    </div>
  );
}
