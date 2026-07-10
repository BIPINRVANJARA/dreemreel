import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
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
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) nav({ to: "/admin", replace: true });
    });
  }, [nav]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    
    if (isSignUp) {
      const { data, error } = await supabase.auth.signUp({ email, password });
      setBusy(false);
      if (error) {
        toast.error(error.message);
        return;
      }
      if (data.session) {
        toast.success("Account created! Logged in as admin.");
        nav({ to: "/admin", replace: true });
      } else {
        toast.success("Registration successful! Check your email or try signing in.");
        setIsSignUp(false);
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setBusy(false);
      if (error) {
        toast.error(error.message);
        return;
      }
      toast.success("Welcome back.");
      nav({ to: "/admin", replace: true });
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
