import { o as __toESM } from "../_runtime.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./client-cEeaNeyL.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { A as LoaderCircle } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-khUIg4i9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AuthPage() {
	const nav = useNavigate();
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [isSignUp, setIsSignUp] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		supabase.auth.getSession().then(({ data }) => {
			if (data.session) nav({
				to: "/admin",
				replace: true
			});
		});
	}, [nav]);
	const submit = async (e) => {
		e.preventDefault();
		setBusy(true);
		if (isSignUp) {
			const { data, error } = await supabase.auth.signUp({
				email,
				password
			});
			setBusy(false);
			if (error) {
				toast.error(error.message);
				return;
			}
			if (data.session) {
				toast.success("Account created! Logged in as admin.");
				nav({
					to: "/admin",
					replace: true
				});
			} else {
				toast.success("Registration successful! Check your email or try signing in.");
				setIsSignUp(false);
			}
		} else {
			const { error } = await supabase.auth.signInWithPassword({
				email,
				password
			});
			setBusy(false);
			if (error) {
				toast.error(error.message);
				return;
			}
			toast.success("Welcome back.");
			nav({
				to: "/admin",
				replace: true
			});
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-dvh place-items-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm rounded-3xl border border-border bg-surface p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label text-primary",
					children: "DreamReel"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-2xl font-semibold",
					children: isSignUp ? "Create Admin Account" : "Admin sign in"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: isSignUp ? "Register to auto-claim admin access." : "Restricted area — DreamReel staff only."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "mt-6 grid gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							required: true,
							placeholder: "Email",
							value: email,
							onChange: (e) => setEmail(e.target.value),
							className: "rounded-xl border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none text-foreground"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "password",
							required: true,
							placeholder: "Password",
							value: password,
							onChange: (e) => setPassword(e.target.value),
							className: "rounded-xl border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none text-foreground"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							disabled: busy,
							className: "mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground disabled:opacity-60 cursor-pointer hover:opacity-90",
							children: [busy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), isSignUp ? "Sign Up" : "Sign In"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setIsSignUp(!isSignUp),
						className: "text-xs text-muted-foreground hover:text-primary transition underline cursor-pointer",
						children: isSignUp ? "Already have an account? Sign In" : "Need an account? Sign Up"
					})
				})
			]
		})
	});
}
//#endregion
export { AuthPage as component };
