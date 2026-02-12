import { Home } from "@/routes/pages";

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
];
