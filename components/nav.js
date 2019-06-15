import Link from "next/link";
import { Fragment } from "react";
import { Nav, Tab } from "react-bootstrap";
import { letterboxWidth, letterboxWidthPadding } from "../config/index";

const navStyle = {
  position: "absolute",
  bottom: 0,
  left: "50%",
  transform: `translateX(-50%)`,
  width: "100%",
  maxWidth: letterboxWidth,
  margin: "auto"
};

const itemStyle = {
  paddingLeft: 50,
  paddingRight: 50,
  marginLeft: 10,
  textAlign: "center"
};

const blockerStyle = {
  backgroundColor: "white",
  position: "absolute",
  bottom: -10,
  height: 10,
  width: "100%",
  zIndex: -1
};

export default props => (
  <Fragment>
    <Nav
      variant="tabs"
      id="navTabs"
      onSelect={props.onSelect}
      className="justify-content-end d-none d-md-flex px-3 px-md-5"
      style={navStyle}
    >
      <Nav.Item>
        <Nav.Link eventKey="work" style={itemStyle}>
          Work
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="about" style={itemStyle}>
          About
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="team" style={itemStyle}>
          Team
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="contact" style={itemStyle}>
          Contact
        </Nav.Link>
      </Nav.Item>
      <div style={blockerStyle}></div>
    </Nav>
    <style jsx>{``}</style>
  </Fragment>
);
