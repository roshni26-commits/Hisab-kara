export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tag: string;
  body: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "chat-like-bookkeeping",
    title: "Chat-like bookkeeping: drop the forms, just type",
    excerpt:
      "Tired of 12-field forms in traditional finance apps? With Hisab-Kara you just type — '500+200 petrol' — and AI does the rest.",
    date: "2026-08-20",
    readingTime: "4 min",
    tag: "Product",
    body: [
      "The biggest problem with finance apps isn't tracking — it's data entry. Pick a category, pick a date, pick an account for every single expense... and the app gets uninstalled within a week.",
      "Hisab-Kara flips this around. You write the way you speak: 'paid 40 to the auto driver', 'salary 45000 received', 'lent Ramesh 500'. The AI understands whether it's an expense, income, or a lending.",
      "Amount, category and note are extracted automatically for every entry. If something's off, edit it in one tap. The goal is simple — so little friction that tracking becomes a habit.",
      "And most importantly: all of this runs through your own Gemini API key (BYOK), so your data goes straight from your phone to Google — nothing ever touches our servers.",
    ],
  },
  {
    slug: "what-is-byok",
    title: "What is BYOK, and why is it safer for your money data",
    excerpt:
      "Bring Your Own Key means: the AI brain is Google's, the control is yours, and we hold none of your data. Explained in simple words.",
    date: "2026-08-12",
    readingTime: "5 min",
    tag: "Privacy",
    body: [
      "BYOK stands for 'Bring Your Own Key'. Hisab-Kara uses Google Gemini for AI, but the API key comes from your own Google account — it even works on the completely free tier.",
      "The direct benefit: your entries are never stored on our servers. They live in a local database on your phone, and AI requests travel straight from your phone to Google. We're not in the middle.",
      "Need a key? It takes 2 minutes on Google AI Studio. The app has a step-by-step guide — just copy and paste it once.",
      "And if you ever delete the app, your data was always with you. No account, no cloud sync, no 'we don't sell your data' fine print — because we never have your data in the first place.",
    ],
  },
  {
    slug: "freelancer-bookkeeping",
    title: "Freelancer bookkeeping: dues, advances and clean notes",
    excerpt:
      "Tracking client payments can be easier than Excel. These 5 chat patterns are ones every freelancer should know.",
    date: "2026-07-28",
    readingTime: "6 min",
    tag: "Guide",
    body: [
      "In freelancing, money lives in three states: work done, invoice sent, payment received. Track all three in Hisab-Kara via chat — type '15000 pending from Client A' and a due entry is created instantly.",
      "Got an advance? Write 'Client B paid 5000 advance'. When the final payment arrives later, view both under the same client name.",
      "At month end, export everything and send it to your CA. Categories are already clean because the AI sorted them at entry time.",
      "Pro tip: always note the project name ('logo project — final 8000'). Searching later takes a second.",
    ],
  },
  {
    slug: "student-budget-50-30-20",
    title: "A student-friendly take on the 50-30-20 rule",
    excerpt:
      "Pocket money or part-time income — how to fit the 50-30-20 rule into Indian student life, without spreadsheets.",
    date: "2026-07-15",
    readingTime: "4 min",
    tag: "Money Tips",
    body: [
      "50-30-20 means: 50% needs (food, travel), 30% wants (movies, food delivery), 20% savings. It's simple, but it only works when you know where your money actually went.",
      "That's where tracking comes in. Hisab-Kara takes 10 seconds a day — 'canteen 60', 'metro 30', 'movie 250'. Check the category breakdown at week's end and the truth is right there.",
      "The 'wants' category surprises most students. Realising that is the first step of budgeting.",
      "A savings trick: on the first day of the month, add a 'savings 500' entry right away. Whatever's left is spendable — reverse budgeting, student style.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
