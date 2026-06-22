import GalleryPage from "../../components/GalleryPage.tsx";
import { familyImages } from "../../data/gallery.ts";

export default function FamilyHeadstones() {
  return <GalleryPage title="Family Monuments" breadcrumb="Family Monuments" images={familyImages} altPrefix="Family monument" />;
}
