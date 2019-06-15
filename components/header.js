import Link from "next/link";
import { Fragment } from "react";
import Nav from "./nav";

const headerStyle = {
  height: 300,
  top: -245,
  background: "url(/static/img/bg.png) white bottom center no-repeat",
  backgroundSize: "cover",
  position: "sticky",
  zIndex: 1
};

const titleStyle = {
  position: "relative",
  display: "inline-block",
  top: "33%",
  left: "25%",
  fontSize: 72,
  transform: `translate(-50%, -50%)`
};

export default props => (
  <Fragment>
    <div id="header" style={headerStyle}>
      <div style={titleStyle}>
        <span>Pitch Blanc</span>
      </div>
      <Nav />
    </div>
  </Fragment>
);
