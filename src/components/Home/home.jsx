import React from "react";

import { Box, makeStyles } from "@material-ui/core";
import Baner from "./baner";
import Navbar from "./navBar";

//Styling in component using class

const useStyle = makeStyles({
  container: {
    padding: 10,
    background: "#f2f2f2",
  },
});

function Home() {
  const classes = useStyle();

  return (
    <div>
      <Navbar />

      <Box className={classes.container}>
        <Baner />
      </Box>
    </div>
  );
}

export default Home;
