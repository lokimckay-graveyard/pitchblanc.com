import Link from "next/link";
import Head from "../components/head";
import Header from "../components/header";
import { Fragment } from "react";
import { Tab } from "react-bootstrap";

const containerStyle = {};

export default props => (
  <Fragment>
    <main style={containerStyle}>
      <Tab.Container id="navTabs" defaultActiveKey="work" transition={false}>
        <Header />
        {props.children}
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
