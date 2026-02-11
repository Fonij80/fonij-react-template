import { createBrowserRouter } from "react-router-dom";
import { NotFound, Home } from "@/pages";
import { Layout } from "./Layout";

const appRoutes = [{ path: "/", element: <Home />, labelKey: "home" }];

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        ...appRoutes
          .filter((route) => route.path !== "/")
          .map((route) => ({
            path: route.path.replace(/^\//, ""),
            element: route.element,
            index: route.path === "/",
          })),
        {
          index: true,
          element: appRoutes.find((r) => r.path === "/")?.element,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);

export default router;
