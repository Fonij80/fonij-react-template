import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

type NavLink = {
  label: string;
  to: string;
};

type NavbarProps = {
  /** Brand logo element (text, SVG, img, etc.) */
  brand?: React.ReactNode;
  /** List of nav links (2–6 recommended) */
  links?: NavLink[];
  /** Optional language switcher component (e.g. your LanguageSwitcher) */
  languageSwitcher?: React.ReactNode;
  /** Optional theme mode toggle component (e.g. your ModeToggle) */
  modeToggle?: React.ReactNode;
  /** Custom className for wrapper */
  className?: string;
  /** Hide brand / links / language / theme if needed */
  showBrand?: boolean;
  showLinks?: boolean;
  showLanguageSwitcher?: boolean;
  showModeToggle?: boolean;
};

export const Navbar = ({
  brand,
  links = [],
  languageSwitcher,
  modeToggle,
  className,
  showBrand = true,
  showLinks = true,
  showLanguageSwitcher = true,
  showModeToggle = true,
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
        {showBrand && (
          <div className="flex items-center">
            {brand ?? (
              <Link
                to="/"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <span className="inline-block rounded-md bg-primary px-2 py-1 text-sm font-bold text-primary-foreground">
                  Fonij
                </span>
                <span className="hidden sm:inline">React Base</span>
              </Link>
            )}
          </div>
        )}

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

          {showModeToggle && modeToggle && (
            <div className="flex items-center">{modeToggle}</div>
          )}
        </div>

        {/* Mobile actions: theme/lang + burger */}
        <div className="flex items-center gap-2 md:hidden">
          {showLanguageSwitcher && languageSwitcher && (
            <div>{languageSwitcher}</div>
          )}

          {showModeToggle && modeToggle && <div>{modeToggle}</div>}

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
                {showBrand && (
                  <div className="mb-6 mt-2">
                    {brand ?? (
                      <Link
                        to="/"
                        className="flex items-center gap-2 text-lg font-semibold"
                        onClick={() => setOpen(false)}
                      >
                        <span className="inline-block rounded-md bg-primary px-2 py-1 text-sm font-bold text-primary-foreground">
                          Fonij
                        </span>
                        <span>React Base</span>
                      </Link>
                    )}
                  </div>
                )}

                <nav className="flex flex-col gap-2">
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
