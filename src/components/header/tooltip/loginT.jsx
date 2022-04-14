import { Box, makeStyles } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import FavoriteIcon from "@material-ui/icons/Favorite";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import StorefrontIcon from "@material-ui/icons/Storefront";

const usestyle = makeStyles({
  container: {
    borderRadius: 3,
    margin: "-6px -8px -7px -8px",
    background: "#ffffff",
    boxShadow: "0 2px  2px 2px #f2f2f2",
  },

  wraper: {
    display: "flex",
    alignItems: "center",
    fontSize: 16,
    borderTop: "1px solid rgba(238, 229, 229, 0.575)",
    padding: 10,
    cursor: "pointer",
    "&:hover": {
      background: "#f8f9fa",
    },
  },

  span: {
    margin: "8px 18px   ",
    color: "rgba(0, 0, 0, 0.8)",
  },

  logo: {
    height: 20,
    color: "red",
  },

  cust: {
    margin: "10px 20px 10px 0",
    color: "black",
  },

  sign: {
    margin: "10px 10px 15px 10px",
    color: "blue",
    marginLeft: 30,
  },
  icon: {
    color: "#2874f0",
  },
});

function LoginT() {
  const classes = usestyle();
  return (
    <Box className={classes.container}>
      <Box className={classes.wraper} style={{ borderTop: "none" }}>
        <span className={classes.cust}>New customer?</span>
        <span className={classes.sign}>Sign Up</span>
      </Box>

      <Box className={classes.wraper}>
        <AccountCircleIcon fontSize="small" className={classes.icon} />
        <span className={classes.span}>My Profile</span>
      </Box>

      <Box className={classes.wraper}>
        <img
          src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
          alt="plus-logo"
          className={classes.logo}
        />
        <span className={classes.span}>Flipkart Plus Zone</span>
      </Box>

      <Box className={classes.wraper}>
        <StorefrontIcon fontSize="small" className={classes.icon} />
        <span className={classes.span}>Orders</span>
      </Box>

      <Box className={classes.wraper}>
        <FavoriteIcon fontSize="small" className={classes.icon} />
        <span className={classes.span}>WishList</span>
      </Box>

      <Box className={classes.wraper}>
        <AccountBalanceWalletIcon fontSize="small" className={classes.icon} />
        <span className={classes.span}>Gift Cards</span>
      </Box>
    </Box>
  );
}

export default LoginT;
