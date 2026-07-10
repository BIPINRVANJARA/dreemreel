import { PROCESS_STEPS } from "@/lib/mock";

export function Process() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="label text-primary">Booking process</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Five steps. Zero stress.</h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {PROCESS_STEPS.map((s, i) => (
            <div key={s.n} className="group relative rounded-2xl border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-primary/60">
              <p className="label text-primary">{s.n}</p>
              <p className="mt-2 text-lg font-semibold">{s.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              {i < PROCESS_STEPS.length - 1 && (
                <span className="hidden md:block absolute right-0 top-1/2 h-px w-4 -translate-y-1/2 translate-x-full bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
