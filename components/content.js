import { Fragment } from "react";
import Lorum from "./lorum";
import Work from "./work";
import { letterboxWidthPadding } from "../config/index";

const contentStyle = {
  padding: 20
};

export default props => {
  return (
    <div style={contentStyle}>
      <Lorum />
    </div>
  );
};
