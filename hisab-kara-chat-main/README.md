# Hisab-Kara: Effortless Finance

Hisab-Kara App — Website Build Prompt (Master Prompt)

Isse copy karke kisi bhi AI website builder (Lovable, v0.dev, Bolt.new, Claude Code, Cursor) me paste kar dena. Ye ek single, complete prompt hai.

🎯 MASTER PROMPT (Copy-Paste Ready)

Build a modern, soft-UI marketing website for "Hisab-Kara" — a free, chat-based
personal finance tracking app for Indian users (students, freelancers, small
shopkeepers). The app lets users type entries like "500+200 petrol" and AI
auto-categorizes income/expense/udhar. It's a BYOK (Bring Your Own Key) model —
user provides their own Google Gemini API key, so it's 100% free with no
subscription and no backend data storage.

TECH STACK
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS for styling
- Framer Motion for micro-animations
- next-themes for dark/light mode toggle
- Fully responsive (mobile-first, since most users will discover this via phone)

DESIGN LANGUAGE — "SOFT UI / NEUMORPHIC-LITE"
- Rounded corners everywhere (16px–24px radius, use rounded-2xl / rounded-3xl)
- Soft, diffused shadows instead of hard borders — cards should feel like they're
  gently floating (box-shadow: soft, low-opacity, large blur radius)
- Generous whitespace, calm and uncluttered layouts
- Pastel gradient accents (soft mint green + soft blue + warm off-white),
  since this is a finance/money app, lean into "calm trust" not "corporate bank"
- Rounded pill-shaped buttons with subtle hover lift (translateY -2px + shadow grow)
- Soft glassmorphism touch on nav bar (backdrop-blur + translucent background)
- Friendly, rounded sans-serif font pairing — headings: "Poppins" or "Sora"
  (semi-bold), body: "Inter" or "Manrope" (regular)
- Icons: rounded/soft style (use lucide-react, stroke-width 1.5)
- Illustrations over stock photos — abstract blob shapes, soft chat-bubble
  motifs, rupee/coin doodles in the hero section

COLOR SYSTEM (Light Mode)
- Background: #FAFAF7 (warm off-white)
- Surface/Card: #FFFFFF with soft shadow
- Primary accent: #4ADE80 → #22C55E gradient (soft green, "money growing" feel)
- Secondary accent: #60A5FA (soft blue, for links/secondary CTAs)
- Text primary: #1F2937
- Text secondary: #6B7280
- Danger/Udhar-owed: #F87171 (soft coral, not harsh red)

COLOR SYSTEM (Dark Mode)
- Background: #0F1115 (near-black, not pure black)
- Surface/Card: #1A1D23 with soft glow shadow instead of drop shadow
- Primary accent: #34D399 (slightly muted green so it doesn't glare at night)
- Secondary accent: #93C5FD
- Text primary: #F3F4F6
- Text secondary: #9CA3AF
- Danger/Udhar-owed: #FCA5A5

Include a smooth toggle switch (sun/moon icon) in the navbar, top-right, that
persists user preference via localStorage and respects system preference on
first load.

SITE STRUCTURE — 4 PAGES

1) HOME / LANDING PAGE (also includes App Download section — this is the
   primary SEO + conversion page)
   - Sticky navbar: Logo "Hisab-Kara", nav links (Features, How it Works,
     Download, Blog, Contact), dark/light toggle, primary CTA button
     "Download App"
   - Hero section: Big headline "Chat Jaisa Likho, Hisaab Khud Ban Jaaye"
     (or similar), subheadline explaining chat-entry + AI categorization,
     two CTA buttons (App Store / Play Store), and a soft mockup illustration
     of the chat interface (phone frame showing "500+200 petrol" turning into
     a categorized entry)
   - Trust bar: "100% Free" · "No Subscription" · "Your Data Stays on Your
     Phone" · "BYOK — Your Own AI Key" as small pill badges
   - Features section (grid of soft cards, one per core feature):
     · Chat Entry + Auto Calculator
     · AI Auto-Categorization (Income/Expense/Udhar)
     · Dashboard (Income, Expense, Balance, Budget tracker)
     · Udhar Ledger with reminders
     · Weekly AI Coach Tips
     · Reports & Export (Pie charts, PDF/Excel)
     Each card: soft icon, title, 1-2 line description, subtle hover animation
   - "How It Works" section: 3-4 step horizontal/vertical timeline
     (Download → Add Gemini API Key → Chat & Track → Get Insights)
   - App Download section (can be its own anchor/section on this page):
     Large soft card with Android + iOS download buttons, QR code for quick
     scan-to-download, App Store/Play Store badges
   - Testimonial/social proof section (placeholder soft cards, editable)
   - Final CTA banner before footer: gradient soft background, "Start Tracking
     Free Today" + download buttons
   - Footer: logo, tagline, nav links, social icons, links to Privacy Policy
     and Contact, copyright line

2) BLOG PAGE
   - Blog listing grid: soft rounded cards with cover image placeholder,
     title, short excerpt, read-time, category tag (Finance Tips / Tutorials)
   - Category filter pills at top (All, Finance Tips, App Tutorials, Updates)
   - Individual blog post template page: clean reading layout, max-width
     content column, soft typography, table of contents for long posts,
     author byline, related posts section at bottom
   - Include 3-4 sample seed blog post cards with placeholder content
     (e.g. "5 Tips to Track Daily Kharcha", "Udhar Kaise Manage Karein",
     "Gemini API Key Kaise Setup Karein")
   - This page must be SEO-friendly: proper heading hierarchy, meta
     description placeholders, semantic HTML

3) CONTACT & SUPPORT PAGE
   - Soft card layout split into: Contact Form (Name, Email, Subject,
     Message — with soft rounded inputs, floating labels) + Direct contact
     info (Email, Instagram/Twitter DM links) side by side
   - FAQ accordion section below (soft expand/collapse animation) covering:
     "Is my data safe?", "What is BYOK?", "Is the app really free?",
     "How do I get a Gemini API key?", "Which platforms are supported?"
   - Support hours / response time note
   - Form should be a working UI (frontend validation) — backend submission
     can be a placeholder/mailto or a simple API route stub

4) PRIVACY POLICY PAGE
   - Clean, readable legal page (still styled softly, not just plain text)
   - Clearly explain the BYOK model: user's Gemini API key and financial
     data are stored locally on their device only; the website itself does
     NOT collect, store, or transmit any user data — website is purely for
     information/SEO and app download
   - Standard sections: Data We Don't Collect, How the App Stores Your Data
     (on-device only), Third-Party AI Processing (Google Gemini API — user's
     own key, per Google's terms), Cookies (website analytics only, if any),
     Children's Privacy, Changes to Policy, Contact for Privacy Questions
   - Sticky table of contents sidebar on desktop for easy navigation

GLOBAL COMPONENTS TO BUILD
- Navbar (sticky, responsive hamburger menu on mobile, dark/light toggle)
- Footer (consistent across all pages)
- Soft Button component (primary/secondary/ghost variants, pill-shaped)
- Soft Card component (reusable, with configurable shadow/hover)
- Theme Toggle component (persists via localStorage + next-themes)
- Badge/Pill component (for trust indicators, category tags)
- Accordion component (for FAQ)
- SEO component/head meta wrapper (title, description, OG tags per page)

RESPONSIVENESS & ACCESSIBILITY
- Mobile-first: hero stacks vertically, nav collapses to hamburger, cards
  go single-column below 640px
- All interactive elements keyboard-accessible, proper ARIA labels
- Color contrast must pass WCAG AA in both light and dark modes
- Smooth scroll for anchor links (How it Works, Download section)

MICRO-INTERACTIONS
- Fade-up on scroll for section reveals (Framer Motion, subtle, not overdone)
- Soft hover lift on cards and buttons
- Theme toggle should animate the icon transition (sun ↔ moon rotate/fade)
- Chat-entry mockup in hero can have a subtle typing animation loop showing
  "500+200 petrol" → auto-categorized card appearing

TONE OF COPY
- Friendly, simple Hinglish-influenced English (or full Hinglish if
  targeting Bharat-first audience) — avoid corporate/banking jargon.
  Keep it warm, reassuring, and "no-nonsense free forever" in tone.

Please scaffold the full Next.js project with these 4 pages, shared layout,
working dark/light toggle, and soft-UI design system as described above.
Use placeholder content where real copy/images aren't specified, but keep
structure and styling production-ready.


💡 Notes for using this prompt

4 Pages breakdown (as per your PRD, "App Download Section" is merged into the Landing Page as a section, since it's not a separate route a user navigates to — this keeps it to exactly 4 pages: Home/Landing, Blog, Contact & Support, Privacy Policy):

/ — Landing (Hero + Features + How it Works + Download + Footer)

/blog — Blog listing + /blog/[slug] post template

/contact — Contact form + FAQ

/privacy — Privacy Policy (BYOK explanation)

Dark/Light mode: prompt already specifies exact hex colors for both modes and a persistent toggle — most builders will implement this correctly with next-themes.


git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
