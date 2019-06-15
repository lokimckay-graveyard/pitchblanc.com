import Lorum from "./lorum";
import { Fragment } from "react";

const containerStyle = {
  display: "flex",
  flexWrap: "no-wrap",
  justifyContent: "space-between",
  margin: 0,
  marginBottom: 25
};

const itemStyle = props => {
  return {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "white",
    paddingTop: 0,
    paddingBottom: 0,
    maxHeight: props.height || 500,
    flexShrink: 0
  };
};

const imageStyle = {
  width: "100%",
  height: "100%"
};

export default props => (
  <Fragment>
    <div style={containerStyle} className="galleryRow row">
      {props.items.map((item, index) => {
        return (
          <div
            key={index}
            style={itemStyle(props)}
            className={"col-" + (item.width || "4")}
          >
            <img
              className="card-img"
              src={item.url}
              alt="Card image"
              style={imageStyle}
            />
            <div className="card-img-overlay d-flex flex-column justify-content-end">
              {item.title && <h5 className="card-title mb-0">{item.title}</h5>}
            </div>
          </div>
        );
      })}
    </div>
    <style jsx>{`
      .galleryRow > :first-child {
        padding-top: 0 !important;
        padding-left: 0 !important;
      }
      .galleryRow > :last-child {
        padding-bottom: 0 !important;
        padding-right: 0 !important;
      }
    `}</style>
  </Fragment>
);
// <img src={item.url} style={imageStyle} />
