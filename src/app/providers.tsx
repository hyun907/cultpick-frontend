"use client";

import type { PropsWithChildren } from "react";

import { QueryClientProvider } from "@tanstack/react-query";

import { getQueryClient } from "@/api/getQueryClient";

export function QueryProvider({ children }: PropsWithChildren) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
