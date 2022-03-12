import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "./searchBar";
import HeadreBtn from "./headerBtn";

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
    textDecoration: "none",
    color: "#fff",
  },
  header: {
    background: "#2874f0",
    height: 55,
    boxShadow: "none",
  },
  logo: {
    height: 20,
  },
  subContainer: {
    display: "flex",
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
      <AppBar position="static" className={classes.header}>
        <ToolBar>
          <Link to="/" className={classes.container}>
            <img
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              alt="flipKart logo"
              className={classes.logo}
            />
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
          <SearchBar />
          <HeadreBtn />
        </ToolBar>
      </AppBar>
    </div>
  );
}

export default Header;
