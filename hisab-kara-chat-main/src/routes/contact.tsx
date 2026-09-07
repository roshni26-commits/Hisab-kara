import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, Send, CheckCircle2, MessageCircleQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Support — Hisab-Kara" },
      {
        name: "description",
        content:
          "Get in touch with Hisab-Kara — support, feedback or feature requests. Instant answers in the FAQ too.",
      },
      { property: "og:title", content: "Contact & Support — Hisab-Kara" },
      {
        property: "og:description",
        content: "Support, feedback or a feature request? Write to us — we reply. Check the FAQ too.",
      },
    ],
  }),
  component: ContactPage,
});

const faqs = [
  {
    q: "Is Hisab-Kara really free?",
    a: "Yes, 100% free. No subscription, no hidden charges. For AI you use your own free Gemini API key — Google's free tier is plenty for normal usage.",
  },
  {
    q: "How do I create a Gemini API key?",
    a: "Go to aistudio.google.com/apikey, sign in with your Google account, click 'Create API key' and copy it. Paste it in the app under Settings → AI Key. Takes 2 minutes, done only once.",
  },
  {
    q: "Where is my data stored?",
    a: "Only on your phone. Hisab-Kara has no server-side database. AI requests go straight from your phone to Google Gemini — they never pass through our servers.",
  },
  {
    q: "Can I write in Hindi or Hinglish?",
    a: "Absolutely! 'autowale ko 40 diye', 'salary aagayi 45000', 'doodh 56 rupaye' — Gemini AI understands both Hinglish and Hindi. English works too, of course.",
  },
  {
    q: "How do I track money lent or borrowed?",
    a: "Just type: 'lent Ramesh 500' or 'need to collect 200 from Suresh'. The lending tab shows all pending dues, and when money comes back you settle it in one tap.",
  },
  {
    q: "What happens to my data if I change phones?",
    a: "Use Settings → Export to download your full data as CSV/JSON, then import it on the new phone. Since data isn't in the cloud, export-import is how you transfer it.",
  },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      setError("Please fill in your name, email and message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("That email doesn't look right — please double-check it.");
      return;
    }
    setError("");
    setSent(true);
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <p className="text-xs font-semibold uppercase tracking-widest text-teal">Contact & Support</p>
      <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">Let's talk</h1>
      <p className="mt-5 max-w-xl text-lg text-muted-foreground">
        Found a bug? Have a feature idea? Or just want to share feedback? Fill the form or email us
        directly — we reply within 1–2 days.
      </p>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        {/* Form */}
        <section aria-label="Contact form">
          <div className="rounded-3xl border border-input bg-card p-7 shadow-soft">
            {sent ? (
              <div className="flex flex-col items-center py-10 text-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-accent text-teal shadow-sm">
                  <CheckCircle2 className="size-7" />
                </span>
                <h2 className="mt-5 text-2xl font-bold">Message received!</h2>
                <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                  Thanks! We'll reply soon. Meanwhile, check out the FAQ or the blog.
                </p>
                <Button variant="soft" className="mt-6" onClick={() => setSent(false)}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your name" autoComplete="name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="What would you like to say? 😊"
                  />
                </div>
                {error && (
                  <p role="alert" className="text-sm font-medium text-destructive">
                    {error}
                  </p>
                )}
                <Button variant="mint" size="lg" className="w-full" type="submit">
                  <Send /> Send message
                </Button>
              </form>
            )}
          </div>
          <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="size-4 text-teal" />
            Direct email:
            <a href="mailto:support@hisabkara.app" className="font-semibold text-foreground hover:text-teal">
              support@hisabkara.app
            </a>
          </p>
        </section>

        {/* FAQ */}
        <section aria-label="Frequently asked questions">
          <div className="flex items-center gap-2">
            <MessageCircleQuestion className="size-5 text-teal" />
            <h2 className="text-2xl font-bold tracking-tight">FAQ — quick answers</h2>
          </div>
          <Accordion type="single" collapsible className="mt-6 space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-2xl border border-input bg-card px-5 shadow-soft"
              >
                <AccordionTrigger className="py-4 text-left text-base font-bold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
    </main>
  );
}
