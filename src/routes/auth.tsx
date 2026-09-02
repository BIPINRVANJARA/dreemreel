import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { auth, db } from "@/lib/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Admin sign in — DreamReel" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        nav({ to: "/admin", replace: true });
      }
    });
    return () => unsubscribe();
  }, [nav]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    
    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // Automatically grant admin role to registered user in Firestore
        await setDoc(doc(db, "user_roles", userCredential.user.uid), {
          role: "admin",
          email: userCredential.user.email,
          created_at: new Date().toISOString()
        }, { merge: true });

        toast.success("Account created! Logged in as admin.");
        nav({ to: "/admin", replace: true });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Welcome back.");
        nav({ to: "/admin", replace: true });
      }
    } catch (err: any) {
      console.error(err);
      let msg = err.message || "Authentication failed.";
      if (err.code === "auth/invalid-credential" || err.code === "auth/wrong-password" || err.code === "auth/user-not-found") {
        msg = "Invalid email or password.";
      } else if (err.code === "auth/email-already-in-use") {
        msg = "This email is already registered. Please sign in.";
      } else if (err.code === "auth/weak-password") {
        msg = "Password should be at least 6 characters.";
      }
      toast.error(msg);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="grid min-h-dvh place-items-center bg-background px-4">
      <div className="w-full max-w-sm rounded-3xl border border-border bg-surface p-8">
        <p className="label text-primary">DreamReel</p>
        <h1 className="mt-2 text-2xl font-semibold">
          {isSignUp ? "Create Admin Account" : "Admin sign in"}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {isSignUp ? "Register to auto-claim admin access." : "Restricted area — DreamReel staff only."}
        </p>
        <form onSubmit={submit} className="mt-6 grid gap-3">
          <input type="email" required placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
            className="rounded-xl border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none text-foreground" />
          <input type="password" required placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}
            className="rounded-xl border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none text-foreground" />
          <button type="submit" disabled={busy}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground disabled:opacity-60 cursor-pointer hover:opacity-90">
            {busy && <Loader2 className="h-4 w-4 animate-spin" />} 
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-xs text-muted-foreground hover:text-primary transition underline cursor-pointer"
          >
            {isSignUp ? "Already have an account? Sign In" : "Need an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}
