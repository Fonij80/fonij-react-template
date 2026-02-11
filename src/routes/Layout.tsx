import { Outlet, ScrollRestoration } from "react-router-dom";
import { NavigationMenu } from "@/components/ui/navigation-menu";

export const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <NavigationMenu />
      </header>
      <main className="container mx-auto p-8">
        <Outlet />
      </main>
      <ScrollRestoration />
    </div>
  );
};
