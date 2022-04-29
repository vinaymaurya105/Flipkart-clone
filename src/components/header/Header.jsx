import React from "react";

import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import HeadreBtn from "./HeaderBtn";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  makeStyles,
  withStyles,
} from "@material-ui/core";

const usestyles = makeStyles((theme) => ({
  container: {
    marginLeft: "12.5%",
    lineHeight: 0,
    cursor: "pointer",
  },

  header: {
    background: "#2874f0",
    height: 55,
    boxShadow: "none",
  },
  plus: {
    textDecoration: "none",
    color: "#fff",
  },

  logo: {
    height: 20,
  },

  subContainer: {
    display: "flex",
    "&:hover": {
      textDecoration: "underline",
    },
  },

  subLogo: {
    height: 10,
    marginLeft: 1,
  },

  subHeading: {
    fontSize: 11,
    fontStyle: "italic",
  },
}));

const ToolBar = withStyles({
  root: {
    minHeight: 55,
  },
})(Toolbar);

function Header() {
  const classes = usestyles();
  return (
    <div>
      <AppBar position="fixed" className={classes.header}>
        <ToolBar>
          <Box className={classes.container}>
            <Link to="/">
              <img
                src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                alt="flipKart logo"
                className={classes.logo}
              />
            </Link>

            <Link to="/plus" className={classes.plus}>
              <Box className={classes.subContainer}>
                <Typography className={classes.subHeading}>
                  Explore <span style={{ color: "#ffe500" }}>Plus</span>
                </Typography>

                <img
                  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
                  alt="plus-logo"
                  className={classes.subLogo}
                />
              </Box>
            </Link>
          </Box>

          <SearchBar />

          <HeadreBtn />
        </ToolBar>
      </AppBar>
    </div>
  );
}

export default Header;
