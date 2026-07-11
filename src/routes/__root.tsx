import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { ReelStoreProvider } from "@/lib/reel-store";
import { ReelPlayerModal } from "@/components/site/reel-player-modal";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="label text-primary">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Scene not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          This page didn't make the final cut.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md w-full text-center">
        <p className="label text-primary">Something broke</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">Cut. Let's try that again.</h1>
        <div className="mt-4 p-4 rounded-xl bg-red-950/40 border border-red-500/20 text-left font-mono text-xs text-red-400 overflow-auto max-h-48 whitespace-pre-wrap select-all">
          <p className="font-semibold text-red-300 mb-1">{error.name}: {error.message}</p>
          {error.stack && <p className="opacity-80 leading-relaxed mt-2 text-[10px]">{error.stack}</p>}
        </div>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 cursor-pointer"
          >
            Retry
          </button>
          <a href="/" className="rounded-full border border-border px-5 py-2.5 text-sm hover:bg-surface cursor-pointer">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "DreamReel Production — Cinematic Reels & Wedding Films" },
      { name: "description", content: "DreamReel Production crafts cinematic reels, pre-wedding films and Instagram-ready content for couples, brands and events in Khedbrahma and across Gujarat." },
      { name: "author", content: "DreamReel Production" },
      { name: "theme-color", content: "#050507" },
      { property: "og:title", content: "DreamReel Production — Cinematic Reels & Wedding Films" },
      { property: "og:description", content: "Every moment deserves a cinematic story. Pre-wedding, birthdays, brand reels — filmed and edited to feel like a movie trailer." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ReelStoreProvider>
        <Outlet />
        <ReelPlayerModal />
        <Toaster theme="dark" position="top-center" />
      </ReelStoreProvider>
    </QueryClientProvider>
  );
}
