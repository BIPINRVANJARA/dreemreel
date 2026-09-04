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
      { title: "Desai Siddhraj — Brand Promoter & Commercial Reel Creator | Himmatnagar, Gujarat" },
      { name: "description", content: "Official portfolio of Desai Siddhraj — Brand Promoter, Commercial Reel Creator & Store Collaborator across Gujarat. Turning stores, cafes, showrooms, and local businesses into viral feed moments." },
      { name: "author", content: "Desai Siddhraj" },
      { name: "theme-color", content: "#050507" },
      { property: "og:title", content: "Desai Siddhraj — Brand Promoter & Commercial Creator" },
      { property: "og:description", content: "I don't just promote your business. I make people want to visit it. High-impact commercial reels, paid promotions, and store collaborations across Gujarat." },
      { property: "og:type", content: "profile" },
      { property: "og:image", content: "/images/siddhraj-portrait.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/images/siddhraj-portrait.jpg" },
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
