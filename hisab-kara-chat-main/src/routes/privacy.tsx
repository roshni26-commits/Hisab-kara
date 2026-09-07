import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, KeyRound, HardDrive, EyeOff, FileDown, Trash2, Mail } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Hisab-Kara" },
      {
        name: "description",
        content:
          "Hisab-Kara privacy policy: your data stays on your phone, and with the BYOK model AI requests go straight to Google. No account, no cloud.",
      },
      { property: "og:title", content: "Privacy Policy — Hisab-Kara" },
      {
        property: "og:description",
        content: "Your data stays on your phone, with BYOK. No account, no cloud, no tracking.",
      },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    id: "tldr",
    icon: ShieldCheck,
    title: "TL;DR — The short version",
    body: [
      "Hisab-Kara has no account system and no cloud database. All your financial entries stay in your phone's local storage.",
      "For AI processing, you use your own Google Gemini API key (BYOK). Your data travels directly between your phone and Google — our server is never in the middle.",
      "We don't see your data, we don't store it, and we don't sell it — because we never have it.",
    ],
  },
  {
    id: "byok",
    icon: KeyRound,
    title: "How BYOK (Bring Your Own Key) works",
    body: [
      "When you type something like '500+200 petrol', that text is sent to Google Gemini so the AI can understand it. This request goes directly from your phone to Google's servers, using your own API key.",
      "Your API key is stored in encrypted storage on your phone. It is never sent to our servers.",
      "Your interaction with Google is governed by Google's own privacy policy. By default, the Gemini API's free tier does not train models on your prompts, but check Google's documentation for the latest terms.",
      "You can delete your API key from the app settings at any time.",
    ],
  },
  {
    id: "local-data",
    icon: HardDrive,
    title: "Where your data lives",
    body: [
      "All entries — expenses, income, lendings — are saved in an on-device local database.",
      "This data never leaves your device unless you export it or delete the app. There is no automatic cloud backup on our side.",
      "If you keep your phone's system backup (Google Drive device backup) enabled, app data may be backed up through Android's standard backup mechanism — that's your phone's setting, not ours.",
    ],
  },
  {
    id: "no-tracking",
    icon: EyeOff,
    title: "What we don't collect",
    body: [
      "No analytics SDK — we don't track what you do inside the app.",
      "No advertising ID, no ad network, no third-party trackers.",
      "No account — we never ask for your email, phone number or name.",
      "Anything you send us via the contact form or email is used only to reply to your support request.",
    ],
  },
  {
    id: "export-delete",
    icon: FileDown,
    title: "Export and delete",
    body: [
      "From Settings → Export you can take out your entire data in CSV or JSON format anytime. It's your data — use it however you like.",
      "Uninstalling the app permanently deletes all local data. Settings → Clear All Data also wipes everything instantly from within the app.",
      "Since your data isn't on our servers at all, there's nothing to process for 'delete my data' requests — the delete button is in your hands.",
    ],
  },
  {
    id: "children",
    icon: Trash2,
    title: "Children and sensitive data",
    body: [
      "Hisab-Kara is intended for users aged 13 and above. We do not knowingly collect any data from children.",
      "Financial data is sensitive — that's why we recommend keeping a lock (PIN/biometric) enabled on your phone.",
    ],
  },
  {
    id: "contact",
    icon: Mail,
    title: "Questions? Contact us",
    body: [
      "For any privacy-related question, write to: support@hisabkara.app. We reply within 1–2 working days.",
      "This policy was last updated: August 2026. If it ever changes, it will be clearly announced here and in the app release notes.",
    ],
  },
];

function PrivacyPage() {
  const [active, setActive] = useState("tldr");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <p className="text-xs font-semibold uppercase tracking-widest text-teal">Privacy Policy</p>
      <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
        Your data stays on your phone
      </h1>
      <p className="mt-5 max-w-xl text-lg text-muted-foreground">
        No lengthy legal jargon — here's how Hisab-Kara handles (and doesn't handle) your data,
        in plain language.
      </p>

      <div className="mt-14 grid gap-10 lg:grid-cols-[240px_1fr]">
        {/* Sticky TOC */}
        <nav
          aria-label="Table of contents"
          className="hidden self-start lg:sticky lg:top-24 lg:block"
        >
          <ul className="space-y-1 border-l border-input">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={`-ml-px block border-l-2 py-2 pl-4 text-sm transition-colors ${
                    active === s.id
                      ? "border-teal font-semibold text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-6">
          {sections.map((s) => (
            <section
              key={s.id}
              id={s.id}
              className="scroll-mt-24 rounded-3xl border border-input bg-card p-7 shadow-soft"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-teal shadow-sm">
                  <s.icon className="size-5" />
                </span>
                <h2 className="text-xl font-bold">{s.title}</h2>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
