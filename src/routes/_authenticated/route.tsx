import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, type User } from "firebase/auth";

export const Route = createFileRoute("/_authenticated")({
  ssr: false,
  beforeLoad: async () => {
    const user = await new Promise<User | null>((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        unsubscribe();
        resolve(currentUser);
      });
    });

    if (!user) {
      throw redirect({ to: "/auth" });
    }
    return { user };
  },
  component: () => <Outlet />,
});
