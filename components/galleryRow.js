import Lorum from "./lorum";
import { Fragment } from "react";

const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignContent: "stretch",
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
    height: props.height || 500
  };
};

const imageStyle = {
  width: "100%",
  height: "100%"
};

export default props => (
  <Fragment>
    <div style={containerStyle} className="galleryRow row">
      {props.items.map(item => {
        return (
          <div
            style={itemStyle(props)}
            className={"col-" + (item.width || "4")}
          >
            <img src={item.url} style={imageStyle} />
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
