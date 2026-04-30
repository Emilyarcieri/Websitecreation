import { Outlet } from "react-router";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Toaster } from "sonner";

export default function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
