import Link from "next/link";
import Head from "next/head";

const containerStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  backgroundColor: "grey"
};

const contentStyle = {
  position: "absolute",
  width: "100px",
  height: "50px",
  top: "50%",
  left: "50%",
  marginLeft: "-50px",
  marginTop: "-25px",
  textAlign: "center",
  fontFamily: `Inconsolata, monospace`
};

const bgImgStyle = {
  backgroundImage: "url(/static/img/bg.png)",
  height: "100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
};

export default () => (
  <div style={containerStyle}>
    <Head>
      <title>Pitch Blanç</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div style={bgImgStyle} />
    <div style={contentStyle}>
      Pitch Blanç
      <br />
      1.1.2020
    </div>
    <style global jsx>{`
      html,
      body {
        height: 100%;
        margin: 0;
      }
    `}</style>
  </div>
);
