import { createBrowserRouter } from "react-router";
import Root from "./pages/Root.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import FAQ from "./pages/FAQ.tsx";
import Testimonials from "./pages/Testimonials.tsx";
import Commercial from "./pages/Commercial.tsx";
import Services from "./pages/Services.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";
import SingleHeadstones from "./pages/memorials/SingleHeadstones.tsx";
import CompanionHeadstones from "./pages/memorials/CompanionHeadstones.tsx";
import FamilyHeadstones from "./pages/memorials/FamilyHeadstones.tsx";
import BronzeMarkers from "./pages/memorials/BronzeMarkers.tsx";
import PetMemorials from "./pages/memorials/PetMemorials.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "faq", Component: FAQ },
      { path: "testimonials", Component: Testimonials },
      { path: "memorials/single", Component: SingleHeadstones },
      { path: "memorials/companion", Component: CompanionHeadstones },
      { path: "memorials/family", Component: FamilyHeadstones },
      { path: "memorials/bronze", Component: BronzeMarkers },
      { path: "memorials/pet", Component: PetMemorials },
      { path: "commercial", Component: Commercial },
      { path: "services", Component: Services },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
