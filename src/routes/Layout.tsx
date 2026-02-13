import { Footer, Navbar, LanguageSwitcher, ThemeToggle } from "@/components";
import { getNavLinks, ROUTES } from "@/constants/routes";
import { Outlet, ScrollRestoration } from "react-router-dom";

export const Layout = () => {
  const links = getNavLinks(ROUTES);
  return (
    <div className="min-h-screen bg-background">
      <Navbar
        links={links}
        languageSwitcher={<LanguageSwitcher />}
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
