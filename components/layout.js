import Link from "next/link";
import Head from "../components/head";
import Header from "../components/header";
import { Fragment } from "react";
import { Tab } from "react-bootstrap";
import { letterboxWidth } from "../config/index";

const containerStyle = {};
const contentStyle = {
  maxWidth: letterboxWidth,
  margin: "auto"
};

export default props => (
  <Fragment>
    <main style={containerStyle}>
      <Tab.Container id="navTabs" defaultActiveKey="work" transition={false}>
        <Header />
        <div style={contentStyle}>{props.children}</div>
      </Tab.Container>
    </main>

    <style global jsx>{`
      html,
      body {
        padding: 0;
        margin: 0;
      }
    `}</style>
  </Fragment>
);
