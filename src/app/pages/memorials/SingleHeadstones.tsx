import GalleryPage from "../../components/GalleryPage.tsx";
import { singleImages } from "../../data/gallery.ts";

export default function SingleHeadstones() {
  return <GalleryPage title="Single Monuments" breadcrumb="Single Monuments" images={singleImages} altPrefix="Single monument" />;
}
