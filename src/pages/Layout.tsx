import { Footer, Navbar, ScrollToTop } from "@/components";
import { Outlet, ScrollRestoration } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto p-8">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
      <ScrollRestoration />
    </div>
  );
};
