import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle, // ✅ Required
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Logo } from "@/components/ui/custom";

type NavLink = {
  label: string;
  to: string;
};

type NavbarProps = {
  brand?: React.ReactNode;
  links?: NavLink[];
  languageSwitcher?: React.ReactNode;
  themeToggle?: React.ReactNode;
  className?: string;
  showBrand?: boolean;
  showLinks?: boolean;
  showLanguageSwitcher?: boolean;
  showThemeToggle?: boolean;
};

const BrandSection = ({
  showBrand,
  brand,
}: {
  showBrand: boolean;
  brand?: React.ReactNode;
}) => {
  if (!showBrand) return null;

  return <div className="flex items-center">{brand ?? <Logo />}</div>;
};

export const Navbar = ({
  brand,
  links = [],
  languageSwitcher,
  themeToggle,
  className,
  showBrand = true,
  showLinks = true,
  showLanguageSwitcher = true,
  showThemeToggle = true,
}: NavbarProps) => {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  const hasLinks = showLinks && links.length > 0;

  return (
    <header
      className={cn(
        "border-b bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60",
        className,
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 md:h-20 md:px-6">
        {/* Left: Brand */}
        <BrandSection showBrand={showBrand} brand={brand} />

        {/* Desktop nav + actions */}
        <div className="ml-auto hidden items-center gap-4 md:flex">
          {hasLinks && (
            <NavigationMenu>
              <NavigationMenuList>
                {links.map((link) => {
                  const isActive =
                    location.pathname === link.to ||
                    (link.to !== "/" && location.pathname.startsWith(link.to));

                  return (
                    <NavigationMenuItem key={link.to}>
                      <NavigationMenuLink
                        asChild
                        className={cn(
                          "text-sm font-medium transition-colors hover:text-primary",
                          isActive
                            ? "text-foreground"
                            : "text-muted-foreground",
                        )}
                      >
                        <Link to={link.to}>{link.label}</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          )}

          {showLanguageSwitcher && languageSwitcher && (
            <div className="flex items-center">{languageSwitcher}</div>
          )}

          {showThemeToggle && themeToggle && (
            <div className="flex items-center">{themeToggle}</div>
          )}
        </div>

        {/* Mobile actions: theme/lang + burger */}
        <div className="flex items-center gap-2 md:hidden">
          {showLanguageSwitcher && languageSwitcher && (
            <div>{languageSwitcher}</div>
          )}

          {showThemeToggle && themeToggle && <div>{themeToggle}</div>}

          {hasLinks && (
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0"
                  aria-label="Toggle navigation menu"
                >
                  {open ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col">
                {/* ✅ Fixed: Added required DialogTitle + DialogDescription */}
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Select a page to navigate to
                </SheetDescription>

                {/* Reusable Brand in mobile sheet */}
                <BrandSection showBrand={showBrand} brand={brand} />

                <nav className="flex flex-col gap-2 mt-4">
                  {links.map((link) => {
                    const isActive =
                      location.pathname === link.to ||
                      (link.to !== "/" &&
                        location.pathname.startsWith(link.to));

                    return (
                      <Button
                        key={link.to}
                        variant="ghost"
                        className={cn(
                          "justify-start text-base",
                          isActive
                            ? "bg-accent text-foreground"
                            : "text-muted-foreground",
                        )}
                        asChild
                        onClick={() => setOpen(false)}
                      >
                        <Link to={link.to}>{link.label}</Link>
                      </Button>
                    );
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
};
