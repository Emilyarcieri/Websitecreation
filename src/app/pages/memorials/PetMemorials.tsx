import GalleryPage from "../../components/GalleryPage.tsx";
import { petImages } from "../../data/gallery.ts";

export default function PetMemorials() {
  return <GalleryPage title="Pet Memorials" breadcrumb="Pet Memorials" images={petImages} altPrefix="Pet memorial" />;
}
