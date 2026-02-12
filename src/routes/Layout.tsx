import { Navbar } from "@/components";
import { LanguageSwitcher } from "@/components/ui-custom/LanguageSwitcher";
import { ModeToggle } from "@/components/ui-custom/ThemeToggle";
import { getNavLinks, ROUTES } from "@/constants/routes";
import { Outlet, ScrollRestoration } from "react-router-dom";

export const Layout = () => {
  const links = getNavLinks(ROUTES);
  return (
    <div className="min-h-screen bg-background">
      <Navbar
        links={links}
        languageSwitcher={<LanguageSwitcher />}
        modeToggle={<ModeToggle />}
      />
      <main className="container mx-auto p-8">
        <Outlet />
      </main>
      <ScrollRestoration />
    </div>
  );
};
