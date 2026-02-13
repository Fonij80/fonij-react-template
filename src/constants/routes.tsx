import { Home, LandingPage } from "@/routes/pages";
import { LANDING_VARIANTS } from "@/routes/pages/landings/config";

export type RouteConfig = {
  path: string;
  element: React.ReactNode;
  label?: string;
  nav?: boolean;
};

export const getNavLinks = (routes: RouteConfig[]) =>
  routes
    .filter((route) => route.nav)
    .map(({ label, path }) => ({ label: label!, to: path }));

export const ROUTES: RouteConfig[] = [
  {
    path: "/",
    element: <Home />,
    label: "Home",
    nav: true,
  },

  ...LANDING_VARIANTS.map((landing) => ({
    path: landing.path,
    element: <LandingPage />,
    label: landing.title,
    nav: false,
  })),
];
