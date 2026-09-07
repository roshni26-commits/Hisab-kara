import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MessageSquareText,
  Sparkles,
  ShieldCheck,
  Smartphone,
  Download,
  ArrowRight,
  IndianRupee,
  HandCoins,
  PieChart,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hisab-Kara — Just Type It, Your Accounts Balance Themselves" },
      {
        name: "description",
        content:
          "Hisab-Kara is a free, chat-based money tracker for India. Type '500+200 petrol' and AI handles the rest. Data stays on your phone with BYOK.",
      },
      { property: "og:title", content: "Hisab-Kara — Just Type It, Your Accounts Balance Themselves" },
      {
        property: "og:description",
        content:
          "Free chat-based money tracker for students, freelancers & shopkeepers. BYOK privacy — your data never leaves your phone.",
      },
    ],
  }),
  component: HomePage,
});

const features = [
  {
    icon: MessageSquareText,
    title: "Chat-style entries",
    desc: "Type '500+200 petrol' — AI extracts the amount, category and note on its own. No forms, no dropdowns.",
  },
  {
    icon: HandCoins,
    title: "Lending tracker",
    desc: "'Lent Ramesh 500' — money owed to you and by you is tracked separately, settled with one tap.",
  },
  {
    icon: PieChart,
    title: "Smart breakdown",
    desc: "Weekly or monthly category-wise summary — food, travel, shopping — everything at a glance.",
  },
  {
    icon: Sparkles,
    title: "Gemini AI powered",
    desc: "English, Hindi or Hinglish — write the way you talk. The AI understands.",
  },
  {
    icon: ShieldCheck,
    title: "BYOK privacy",
    desc: "Bring your own Gemini API key. Your data stays on your phone — never on our servers.",
  },
  {
    icon: Smartphone,
    title: "Offline-first",
    desc: "No account, no cloud, no internet worries. Export your data anytime.",
  },
];

const reviews = [
  {
    name: "Ankit Sharma",
    initial: "A",
    time: "2 days ago",
    stars: 5,
    text: "Best finance app I have used! Very clean UI and all features are very helpful. Typing entries like chat is genius.",
  },
  {
    name: "Priya Mehta",
    initial: "P",
    time: "1 week ago",
    stars: 5,
    text: "Helps me track my expenses daily. The lending tracker alone is worth it — I finally know who owes me what. Totally love it!",
  },
  {
    name: "Ravi Verma",
    initial: "R",
    time: "2 weeks ago",
    stars: 5,
    text: "As a freelancer, keeping track of client dues was a nightmare. Now I just type it and the AI sorts everything. And it's actually free.",
  },
];

const steps = [
  {
    num: "1",
    title: "Download the app",
    desc: "It's free and takes 2 minutes to set up. Paste your Gemini key — just once.",
  },
  {
    num: "2",
    title: "Type like you talk",
    desc: "'paid 40 to the auto driver' or 'salary 45000 received' — AI figures out the rest.",
  },
  {
    num: "3",
    title: "See your accounts",
    desc: "Totals, categories and lendings — all automatic. Export at month end.",
  },
];

function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 80% 20%, rgb(52 211 153 / 0.22) 0%, transparent 70%)",
          }}
        />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-input bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground shadow-[inset_2px_2px_4px_rgb(203_213_225_/0.3),inset_-2px_-2px_4px_rgb(255_255_255_/0.8)]">
              <span className="size-1.5 rounded-full bg-mint" />
              Free · Private · Made for India
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Just type it,
              <span className="block text-teal">your accounts</span>
              balance themselves
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              A free money tracker for students, freelancers and shopkeepers. No forms —
              just type <span className="font-semibold text-foreground">"500+200 petrol"</span> and
              AI handles the rest.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button variant="mint" size="lg" asChild>
                <a href="#download">
                  <Download /> Download Free
                </a>
              </Button>
              <Button variant="soft" size="lg" asChild>
                <Link to="/blog">
                  How it works <ArrowRight />
                </Link>
              </Button>
            </div>
            <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="size-4 text-mint" />
              No account · No cloud · BYOK — your key, your data
            </p>

            {/* Store-style stats */}
            <div className="mt-8 flex divide-x divide-border rounded-3xl border border-input bg-card shadow-soft">
              <div className="flex-1 px-5 py-4">
                <p className="flex items-center gap-1.5 text-2xl font-bold">
                  4.8 <Star className="size-4 fill-yellow text-yellow" />
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">12.5K reviews</p>
              </div>
              <div className="flex-1 px-5 py-4">
                <p className="text-2xl font-bold">100K+</p>
                <p className="mt-0.5 text-xs text-muted-foreground">Downloads</p>
              </div>
              <div className="flex-1 px-5 py-4">
                <p className="text-2xl font-bold">Free</p>
                <p className="mt-0.5 text-xs text-muted-foreground">No subscription</p>
              </div>
            </div>
          </div>

          {/* Chat mockup */}
          <div className="relative">
            <div className="rounded-3xl border border-input bg-card p-5 shadow-lift">
              <div className="flex items-center gap-2 border-b border-border pb-3">
                <span className="size-2.5 rounded-full bg-mint" />
                <span className="size-2.5 rounded-full bg-sky" />
                <span className="size-2.5 rounded-full bg-teal" />
                <span className="ml-2 text-xs font-semibold text-muted-foreground">
                  Hisab-Kara · Today
                </span>
              </div>
              <div className="space-y-4 py-5 text-sm">
                <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-teal px-4 py-2.5 font-medium text-white shadow-sm">
                  500+200 petrol
                </div>
                <div className="w-fit max-w-[85%] rounded-2xl rounded-bl-sm bg-accent px-4 py-2.5 shadow-sm">
                  <p className="font-semibold text-foreground">₹700 · Transport 🚗</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">Expense added — petrol</p>
                </div>
                <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-teal px-4 py-2.5 font-medium text-white shadow-sm">
                  lent Ramesh 500
                </div>
                <div className="w-fit max-w-[85%] rounded-2xl rounded-bl-sm bg-accent px-4 py-2.5 shadow-sm">
                  <p className="font-semibold text-foreground">₹500 · Lent (Ramesh owes you) 🤝</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">Saved to your lending list</p>
                </div>
                <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-teal px-4 py-2.5 font-medium text-white shadow-sm">
                  salary 45000 received
                </div>
                <div className="w-fit max-w-[85%] rounded-2xl rounded-bl-sm bg-accent px-4 py-2.5 shadow-sm">
                  <p className="font-semibold text-foreground">₹45,000 · Income 💰</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">This month: ₹46,200 in / ₹3,140 out</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-input bg-background px-4 py-3 text-sm text-muted-foreground shadow-inset">
                <IndianRupee className="size-4" />
                Type your expense…
              </div>
            </div>
            <div
              aria-hidden
              className="absolute -bottom-6 -right-4 -z-10 h-40 w-40 rounded-full bg-mint/30 blur-3xl"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal">Features</p>
          <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
            Everything a money app should have
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <article
                key={f.title}
                className="rounded-3xl border border-input bg-card p-6 shadow-soft transition-transform duration-200 hover:-translate-y-1"
              >
                <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-teal shadow-sm">
                  <f.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal">How it works</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Just 3 steps</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.num} className="relative rounded-3xl border border-input bg-card p-6 shadow-soft">
                <span className="text-5xl font-bold text-teal/20">{s.num}</span>
                <h3 className="mt-2 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-teal">Reviews</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">People love it</h2>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-input bg-card px-5 py-3 shadow-soft">
              <p className="text-4xl font-bold">4.8</p>
              <div>
                <p className="flex gap-0.5" aria-label="4.8 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-yellow text-yellow" />
                  ))}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">12,542 reviews</p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <figure
                key={r.name}
                className="flex flex-col rounded-3xl border border-input bg-card p-6 shadow-soft transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-mint to-teal text-lg font-bold text-white">
                    {r.initial}
                  </span>
                  <div>
                    <figcaption className="text-sm font-semibold">{r.name}</figcaption>
                    <p className="text-xs text-muted-foreground">{r.time}</p>
                  </div>
                </div>
                <p className="mt-4 flex gap-0.5" aria-label={`${r.stars} out of 5 stars`}>
                  {[...Array(r.stars)].map((_, i) => (
                    <Star key={i} className="size-4 fill-yellow text-yellow" />
                  ))}
                </p>
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  "{r.text}"
                </blockquote>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-14 text-center text-white sm:px-12 shadow-lift">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(50% 60% at 50% 0%, rgb(45 212 191 / 0.35) 0%, transparent 70%)",
              }}
            />
            <h2 className="relative text-3xl font-bold tracking-tight sm:text-4xl">
              Start tracking today
            </h2>
            <p className="relative mx-auto mt-4 max-w-md text-slate-300">
              Free, forever. Grab your free Gemini key from Google AI Studio, paste it in —
              and make your first entry in 30 seconds.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Button
                size="lg"
                asChild
                className="bg-white text-slate-900 shadow-[4px_4px_12px_rgb(0_0_0_/0.2),-4px_-4px_12px_rgb(255_255_255_/0.1)] hover:-translate-y-0.5 hover:bg-slate-100"
              >
                <a
                  href="https://github.com/hisab-kara/app/releases/latest"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Download /> Download Android APK
                </a>
              </Button>
              <Button
                size="lg"
                asChild
                className="border border-white/25 bg-transparent text-white hover:-translate-y-0.5 hover:bg-white/10"
              >
                <a href="https://aistudio.google.com/apikey" target="_blank" rel="noreferrer">
                  Get a free Gemini key <ArrowRight />
                </a>
              </Button>
            </div>
            <p className="relative mt-5 text-xs text-slate-400">
              iOS version coming soon · Join the waitlist via <Link to="/contact" className="underline">contact</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
