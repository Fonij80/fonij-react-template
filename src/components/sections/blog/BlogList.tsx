import { BlogLayout } from "./BlogLayout";
import { BlogPostCard } from "./BlogPostCard";
import { useBlogList } from "@/api/hooks/useBlogApi";
import { Skeleton } from "@/components/ui/skeleton";

interface BlogListProps {
  title?: string;
  onPostClick?: (slug: string) => void;
}

export const BlogList = ({ title = "Blog", onPostClick }: BlogListProps) => {
  const { posts, loading } = useBlogList(false);

  if (loading) {
    return (
      <BlogLayout title={title}>
        <div className="space-y-4">
          <Skeleton className="h-9 w-40" />
          <div className="grid gap-6 md:grid-cols-2">
            <Skeleton className="h-52 w-full" />
            <Skeleton className="h-52 w-full" />
          </div>
        </div>
      </BlogLayout>
    );
  }

  if (!posts.length) {
    return (
      <BlogLayout title={title}>
        <div className="rounded-lg border bg-muted/40 p-6 text-sm text-muted-foreground">
          No posts yet. Create your first post in the blog CMS.
        </div>
      </BlogLayout>
    );
  }

  return (
    <BlogLayout title={title}>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} onClick={onPostClick} />
        ))}
      </div>
    </BlogLayout>
  );
};
