import Link from "next/link";
import { Fragment } from "react";
import { Nav, Tab } from "react-bootstrap";

const navStyle = {
  position: "absolute",
  bottom: 0,
  width: "100%"
};

const itemStyle = {
  paddingLeft: 60,
  paddingRight: 60,
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
  <Nav
    variant="tabs"
    onSelect={props.onSelect}
    className="justify-content-around"
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
);
