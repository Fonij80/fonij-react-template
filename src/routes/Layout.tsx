import { Footer, Navbar } from "@/components";
import { getNavLinks, ROUTES } from "@/constants/routes";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { LanguageToggle, ThemeToggle } from "@/components/ui/custom";

export const Layout = () => {
  const links = getNavLinks(ROUTES);
  return (
    <div className="min-h-screen bg-background">
      <Navbar
        links={links}
        languageSwitcher={<LanguageToggle />}
        themeToggle={<ThemeToggle />}
      />
      <main className="container mx-auto p-8">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};
