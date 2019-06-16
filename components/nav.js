import Link from "next/link";
import { Fragment } from "react";
import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { letterboxWidth, letterboxWidthPadding } from "../config/index";

export default props => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const boxStyle = {
    position: "absolute",
    bottom: 0,
    width: "100%"
  };
  const paperStyle = { position: "absolute", height: "100%", width: "100%" };
  return (
    <Fragment>
      <Box style={boxStyle} display="flex" justifyContent="flex-end">
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
        >
          <Tab label="work" />
          <Tab label="about" />
          <Tab label="team" />
          <Tab label="contact" />
        </Tabs>
      </Box>
      <style jsx>{``}</style>
    </Fragment>
  );
};
