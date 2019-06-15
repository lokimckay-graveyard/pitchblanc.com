import Lorum from "./lorum";
import { Fragment } from "react";

const containerStyle = {
  display: "flex",
  flexWrap: "no-wrap",
  marginTop: 0,
  marginBottom: 25,
  marginLeft: -10,
  marginRight: -10
};

const itemStyle = {
  margin: 0,
  paddingLeft: 0,
  paddingRight: 0
};

const imgStyle = {
  width: "100%"
};

export default props => (
  <Fragment>
    <div style={containerStyle} className="galleryRow">
      {props.items.map((item, index) => {
        return (
          <div className={"col-" + (item.width || "4")} style={itemStyle}>
            <img
              key={index}
              src={item.url}
              alt={item.title || "gallery image"}
              style={imgStyle}
            />
          </div>
        );
      })}
    </div>
    <style jsx>{``}</style>
  </Fragment>
);
