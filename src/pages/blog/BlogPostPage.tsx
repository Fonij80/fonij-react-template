import { useParams, Link } from "react-router-dom";
import { BlogPost as BlogPostView, BlogLayout } from "@/components";
import { Button } from "@/components/ui/button";

export const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return (
      <BlogLayout title="Post not found">
        <div className="flex flex-col items-start gap-4 rounded-lg border bg-muted/40 p-6">
          <div>
            <h2 className="text-lg font-semibold">Post not found</h2>
            <p className="text-sm text-muted-foreground">
              The blog post you’re looking for doesn’t exist or the URL is
              incorrect.
            </p>
          </div>
          <Button asChild variant="outline" size="sm">
            <Link to="/blog">← Back to blog</Link>
          </Button>
        </div>
      </BlogLayout>
    );
  }

  return <BlogPostView slug={slug} />;
};
