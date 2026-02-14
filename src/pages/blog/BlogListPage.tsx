import { useNavigate } from "react-router-dom";
import { BlogLayout, BlogList } from "@/components";
import { Button } from "@/components/ui/button";

export const BlogListPage = () => {
  const navigate = useNavigate();

  const handlePostClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <BlogLayout title="Fonij Blog">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          Discover the latest posts, updates, and notes from Fonij.
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate("/admin/blog")}
        >
          Open Blog CMS
        </Button>
      </div>

      <BlogList title="Latest posts" onPostClick={handlePostClick} />
    </BlogLayout>
  );
};
