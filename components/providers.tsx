"use client";

import { Toaster } from "sonner";

export function SiteToaster() {
  return <Toaster richColors closeButton position="top-right" toastOptions={{ style: { fontFamily: "inherit" } }} />;
}
