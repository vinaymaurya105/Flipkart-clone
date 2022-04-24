import React, { useContext, useState } from "react";

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

import { LoginContext } from "context";

const usestyle = makeStyles((theme) => ({
  container: {
    margin: " 0 4% 0 auto ",
    display: "flex",

    "& > *": {
      marginRight: 50,
      alignItems: "center",
      textDecoration: "none",
      color: "#fff",
    },
  },
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
    marginTop: 3,
    cursor: "pointer",
  },

  icon: {
    width: 16,
    // marginTop: 4,
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
  const [openIcon, setOpenIcon] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const { user, setUser, cartItems } = useContext(LoginContext);

  const classes = usestyle();

  const handleMouseOver = () => {
    setOpenIcon(true);
  };

  const handleMouseLeave = () => {
    setOpenIcon(false);
  };
  const handleLoginOver = () => {
    setOpenLogin(true);
  };
  const handleLoginLeave = () => {
    setOpenLogin(false);
  };
  const handleClick = () => {
    setOpen(true);
  };

  return (
    <Box className={classes.container}>
      {user ? (
        <Tooltip
          title={<AfterLoginT setUser={setUser} />}
          interactive={true}
          arrow
          classes={{ arrow: classes.arrow }}
        >
          <Box
            className={classes.wraper}
            onMouseOver={handleLoginOver}
            onMouseLeave={handleLoginLeave}
          >
            <Typography>{user}</Typography>
            {!openLogin ? (
              <ExpandMoreIcon className={classes.icon} />
            ) : (
              <ExpandLessIcon className={classes.icon} />
            )}
          </Box>
        </Tooltip>
      ) : (
        <Tooltip
          classes={{ arrow: classes.arrow }}
          title={<LoginT />}
          interactive={true}
          arrow
        >
          <Button
            variant="contained"
            className={classes.loginBtn}
            onClick={handleClick}
          >
            Login
          </Button>
        </Tooltip>
      )}

      <Tooltip
        title={<MoreT />}
        interactive={true}
        arrow
        classes={{ arrow: classes.arrow }}
      >
        <Box
          className={classes.iconWrap}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <Typography className={classes.text}>More</Typography>
          {openIcon ? (
            <ExpandLessIcon className={classes.icon} />
          ) : (
            <ExpandMoreIcon className={classes.icon} />
          )}
        </Box>
      </Tooltip>

      <Link to="/cart" className={classes.wraper}>
        <Badge
          badgeContent={cartItems.length && cartItems.length}
          color="error"
        >
          <ShoppingCartIcon />
        </Badge>
        <Typography className={classes.cart}>Cart</Typography>
      </Link>

      <LoginDialog open={open} setOpen={setOpen} setUser={setUser} />
    </Box>
  );
}

export default HeaderBtn;
