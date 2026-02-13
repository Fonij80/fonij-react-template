import type { BlogPost } from "@/types/blog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogPostCardProps {
  post: BlogPost;
  onClick?: (slug: string) => void;
}

export const BlogPostCard = ({ post, onClick }: BlogPostCardProps) => {
  const handleClick = () => {
    onClick?.(post.slug);
  };

  const dateLabel = new Date(post.createdAt).toLocaleDateString();

  return (
    <Card
      role={onClick ? "button" : "article"}
      onClick={onClick ? handleClick : undefined}
      className={[
        "group cursor-pointer transition-colors",
        onClick && "hover:border-primary/40",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {post.coverImage && (
        <div className="aspect-[16/9] w-full overflow-hidden rounded-t-lg border-b bg-muted">
          <img
            src={post.coverImage}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
      )}

      <CardHeader className="space-y-2">
        <CardTitle className="line-clamp-2 text-xl font-semibold leading-tight">
          {post.title}
        </CardTitle>
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span>{dateLabel}</span>
          {post.tags.length > 0 && (
            <>
              <span className="text-muted-foreground/70">•</span>
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
      </CardHeader>

      <CardContent>
        <p className="line-clamp-3 text-sm text-muted-foreground">
          {post.excerpt}
        </p>
      </CardContent>
    </Card>
  );
};
