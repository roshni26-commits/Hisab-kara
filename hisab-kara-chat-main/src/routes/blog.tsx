import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { posts } from "@/lib/posts";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Hisab-Kara" },
      {
        name: "description",
        content:
          "Money tips, BYOK privacy guides and Hisab-Kara updates — simple and straight.",
      },
      { property: "og:title", content: "Blog — Hisab-Kara" },
      {
        property: "og:description",
        content: "Money tips, privacy guides and product updates — simple and straight.",
      },
    ],
  }),
  component: BlogLayout,
});

function BlogLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname !== "/blog") return <Outlet />;
  return <BlogListing />;
}

function BlogListing() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <p className="text-xs font-semibold uppercase tracking-widest text-teal">Blog</p>
      <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
        Money, privacy and product updates
      </h1>
      <p className="mt-5 max-w-xl text-lg text-muted-foreground">
        Short, useful articles — budgeting tips, BYOK explainers and new Hisab-Kara features.
      </p>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            to="/blog/$slug"
            params={{ slug: post.slug }}
            className="group flex flex-col rounded-3xl border border-input bg-card p-7 shadow-soft transition-transform duration-200 hover:-translate-y-1"
          >
            <span className="w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
              {post.tag}
            </span>
            <h2 className="mt-4 text-2xl font-bold leading-snug group-hover:text-teal">
              {post.title}
            </h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>
            <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
              <span className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="size-3.5" />
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="size-3.5" />
                  {post.readingTime}
                </span>
              </span>
              <span className="flex items-center gap-1 font-semibold text-teal">
                Read <ArrowRight className="size-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
