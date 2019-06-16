import Lorum from "./lorum";
import { Fragment } from "react";
import GalleryRow from "./galleryRow";
import dynamic from "next/dynamic";

// const gallery = [
//   {
//     items: [
//       { title: "Cat1", url: "http://placekitten.com/400/500", width: 4 },
//       { title: "Cat2", url: "http://placekitten.com/400/500", width: 4 },
//       { title: "Cat3", url: "http://placekitten.com/400/500", width: 4 }
//     ]
//   },
//   {
//     height: 200,
//     items: [
//       { title: "Cat4", url: "http://placekitten.com/600/200", width: 6 },
//       { title: "Cat5", url: "http://placekitten.com/600/200", width: 6 }
//     ]
//   },
//   {
//     height: 400,
//     items: [
//       { title: "Cat6", url: "http://placekitten.com/900/400", width: 11 },
//       { title: "Cat7", url: "http://placekitten.com/100/400", width: 1 }
//     ]
//   }
// ];

const muuriGallery = [
  { title: "Cat1", url: "http://placekitten.com/500/500" },
  { title: "Cat2", url: "http://placekitten.com/500/500" },
  { title: "Cat3", url: "http://placekitten.com/500/500" }
];

export default props => (
  <Fragment>
    <div></div>
    <style jsx>{``}</style>
  </Fragment>
);

// <Lorum />
// {gallery.map((row, index) => {
//   return (
//     <GalleryRow
//       key={index}
//       items={row.items}
//       height={row.height || 500}
//     />
//   );
// })}
