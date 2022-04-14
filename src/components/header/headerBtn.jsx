import React, { useState } from "react";

import {
  Box,
  Button,
  Typography,
  makeStyles,
  Badge,
  Tooltip,
} from "@material-ui/core";

// import icon
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

//import components
import LoginT from "./tooltip/loginT";
import MoreT from "./tooltip/moreT";
import LoginDialog from "../login/loginDialog";
import AfterLoginT from "./tooltip/afterLoginT";

const usestyle = makeStyles((theme) => ({
  loginBtn: {
    background: "#ffffff",
    color: "#2874f0",
    textTransform: "unset",
    fontWeight: 550,
    fontSize: 16,
    padding: "1px 37px",
    borderRadius: 2,
    boxShadow: "none",
    "&:hover": {
      background: "white",
    },
  },

  container: {
    margin: " 0 6% 0 auto ",
    display: "flex",

    "& > *": {
      marginRight: 50,
      alignItems: "center",
      textDecoration: "none",
      color: "#fff",
    },
  },

  wraper: {
    display: "flex",
    marginTop: 5,
    cursor: "pointer",
  },

  iconWrap: {
    display: "flex",
    cursor: "pointer",
  },

  text: {
    marginTop: 5,
  },

  icon: {
    width: 16,
    marginTop: 5,
  },
  cart: {
    marginLeft: 8,
  },

  arrow: {
    fontSize: 22,
    color: "#ffffff",
  },
}));

function HeaderBtn() {
  const [open, setOpen] = useState(false);

  const classes = usestyle();

  return (
    <Box className={classes.container}>
      <Tooltip
        classes={{ arrow: classes.arrow }}
        title={<AfterLoginT />}
        interactive={true}
        arrow
      >
        <Link to="">
          <Button
            variant="contained"
            className={classes.loginBtn}
            onClick={() => setOpen(true)}
          >
            Login
          </Button>
        </Link>
      </Tooltip>

      <Tooltip
        title={<MoreT />}
        interactive={true}
        arrow
        classes={{ arrow: classes.arrow }}
      >
        <Link to="">
          <Box className={classes.iconWrap}>
            <Typography className={classes.text}>More</Typography>
            {onmousemove ? (
              <ExpandLessIcon className={classes.icon} />
            ) : (
              <ExpandMoreIcon className={classes.icon} />
            )}
          </Box>
        </Link>
      </Tooltip>

      <Link to="/cart" className={classes.wraper}>
        <Badge badgeContent={4} color="error">
          <ShoppingCartIcon />
        </Badge>
        <Typography className={classes.cart}>Cart</Typography>
      </Link>

      <LoginDialog open={open} setOpen={setOpen} />
    </Box>
  );
}

export default HeaderBtn;
