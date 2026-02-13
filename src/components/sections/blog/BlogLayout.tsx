import type { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";

interface BlogLayoutProps {
  title?: string;
  children: ReactNode;
}

export const BlogLayout = ({ title, children }: BlogLayoutProps) => {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-10 lg:max-w-4xl">
      {title && (
        <>
          <header className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h1>
          </header>
          <Separator />
        </>
      )}
      <div>{children}</div>
    </section>
  );
};
