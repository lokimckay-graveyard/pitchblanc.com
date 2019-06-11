import Link from "next/link";
import Head from "../components/head";
import { Fragment } from "react";
import Header from "../components/header";

const containerStyle = {
  position: "absolute",
  width: "100%",
  height: "100%"
};

export default props => (
  <Fragment>
    <main style={containerStyle}>
      <Header />
      {props.children}
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
