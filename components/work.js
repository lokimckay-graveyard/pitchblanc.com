import Lorum from "./lorum";
import { Fragment } from "react";
import GalleryRow from "./galleryRow";

const gallery = [
  {
    items: [
      { url: "http://placekitten.com/400/500", width: 4 },
      { url: "http://placekitten.com/400/500", width: 4 },
      { url: "http://placekitten.com/400/500", width: 4 }
    ]
  },
  {
    height: 200,
    items: [
      { url: "http://placekitten.com/600/200", width: 6 },
      { url: "http://placekitten.com/600/200", width: 6 }
    ]
  },
  {
    height: 400,
    items: [
      { url: "http://placekitten.com/800/400", width: 8 },
      { url: "http://placekitten.com/400/400", width: 4 }
    ]
  }
];

export default props => (
  <div>
    {gallery.map(row => {
      return <GalleryRow items={row.items} height={row.height || 500} />;
    })}
    <Lorum />
  </div>
);
