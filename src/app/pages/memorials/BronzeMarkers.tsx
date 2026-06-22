import GalleryPage from "../../components/GalleryPage.tsx";
import { bronzeImages } from "../../data/gallery.ts";

export default function BronzeMarkers() {
  return <GalleryPage title="Bronze Markers" breadcrumb="Bronze Markers" images={bronzeImages} altPrefix="Bronze marker" />;
}
