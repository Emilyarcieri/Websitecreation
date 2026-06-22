import GalleryPage from "../../components/GalleryPage.tsx";
import { companionImages } from "../../data/gallery.ts";

export default function CompanionHeadstones() {
  return <GalleryPage title="Companion Monuments" breadcrumb="Companion Monuments" images={companionImages} altPrefix="Companion monument" />;
}
