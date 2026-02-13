import { BlogLayout } from "./BlogLayout";
import { useBlogPostBySlug } from "@/api/hooks/useBlogApi";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface BlogPostPageProps {
  slug: string;
}

export const BlogPost = ({ slug }: BlogPostPageProps) => {
  const { post, loading } = useBlogPostBySlug(slug, false);

  if (loading) {
    return (
      <BlogLayout>
        <div className="space-y-4">
          <Skeleton className="h-9 w-52" />
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-64 w-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
          </div>
        </div>
      </BlogLayout>
    );
  }

  if (!post) {
    return (
      <BlogLayout>
        <div className="rounded-lg border bg-muted/40 p-6 text-sm text-muted-foreground">
          Post not found.
        </div>
      </BlogLayout>
    );
  }

  const dateLabel = new Date(post.createdAt).toLocaleDateString();

  return (
    <BlogLayout title={post.title}>
      <article className="space-y-6">
        <header className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span>{dateLabel}</span>
            {post.tags.length > 0 && (
              <>
                <span className="text-muted-foreground/60">•</span>
                <div className="flex flex-wrap gap-1">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-[10px]">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </>
            )}
          </div>
          <Separator />
        </header>

        {post.coverImage && (
          <div className="overflow-hidden rounded-lg border bg-muted">
            <img
              src={post.coverImage}
              alt={post.title}
              className="max-h-[420px] w-full object-cover"
              loading="lazy"
            />
          </div>
        )}

        <section className="prose prose-neutral dark:prose-invert max-w-none text-sm sm:text-base">
          {post.content
            .split("\n")
            .map((line, idx) =>
              line.trim().length ? (
                <p key={idx}>{line}</p>
              ) : (
                <p key={idx} className="h-3" />
              ),
            )}
        </section>
      </article>
    </BlogLayout>
  );
};
