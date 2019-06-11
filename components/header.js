import Link from "next/link";
import { Fragment } from "react";

const headerStyle = {
  minHeight: 300,
  height: "66%",
  backgroundColor: "red"
};

const titleStyle = {
  backgroundColor: "blue",
  position: "relative",
  display: "inline-block",
  top: "33%",
  left: "25%",
  fontSize: 72,
  transform: `translate(-50%, -50%)`
};

export default props => (
  <div id="header" style={headerStyle}>
    <div style={titleStyle}>
      <span>Pitch Blanc</span>
    </div>
  </div>
);
