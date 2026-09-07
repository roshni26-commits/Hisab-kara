import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import { getPost, posts } from "@/lib/posts";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article not found — Hisab-Kara" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — Hisab-Kara Blog` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20">
      <Button variant="ghost" size="sm" asChild>
        <Link to="/blog">
          <ArrowLeft /> All articles
        </Link>
      </Button>

      <article className="mt-8">
        <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
          {post.tag}
        </span>
        <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          {post.title}
        </h1>
        <div className="mt-4 flex items-center gap-5 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="size-4" />
            {new Date(post.date).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="size-4" />
            {post.readingTime} read
          </span>
        </div>

        <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/90">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </article>

      <aside className="mt-16 border-t border-input pt-10">
        <h2 className="text-2xl font-bold tracking-tight">Read more</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {others.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="rounded-2xl border border-input bg-card p-5 shadow-soft transition-transform duration-200 hover:-translate-y-0.5"
            >
              <h3 className="text-base font-bold leading-snug">{p.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </aside>
    </main>
  );
}
