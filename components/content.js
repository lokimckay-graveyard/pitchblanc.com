import { Tab } from "react-bootstrap";
import { Fragment } from "react";
import Lorum from "./lorum";
import Work from "./work";
import { letterboxWidthPadding } from "../config/index";

const contentStyle = {
  paddingTop: 20,
  paddingBottom: 20
};

export default props => {
  return (
    <Fragment>
      <Tab.Content style={contentStyle} className="px-3 px-md-5">
        <Tab.Pane eventKey="work">
          <Work />
        </Tab.Pane>
        <Tab.Pane eventKey="about">
          about
          <Lorum />
        </Tab.Pane>
        <Tab.Pane eventKey="team">
          team
          <Lorum />
        </Tab.Pane>
        <Tab.Pane eventKey="contact">
          contact
          <Lorum />
        </Tab.Pane>
      </Tab.Content>
    </Fragment>
  );
};
