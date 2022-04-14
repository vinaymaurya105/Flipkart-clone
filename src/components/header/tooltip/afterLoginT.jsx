import { Box, makeStyles } from "@material-ui/core";

//import materiul ui Icon

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import CallToActionIcon from "@material-ui/icons/CallToAction";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatIcon from "@material-ui/icons/Chat";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

// Styling

const useStyle = makeStyles({
  container: {
    background: "#ffffff",
    margin: "-6px -8px -7px -8px",
    borderRadius: 3,
    boxShadow: "0 2px  2px 2px #f2f2f2",
    width: 240,
  },

  wraper: {
    display: "flex",
    alignItems: "center",
    fontSize: 16,
    padding: 10,

    cursor: "pointer",
    borderTop: "1px solid rgba(238, 229, 229, 0.575)",
    "&:hover": {
      background: "#f8f9fa",
    },
  },

  span: {
    margin: "11px 18px   ",
    color: "rgba(0, 0, 0, 0.8)",
  },
  icon: {
    color: "#2874f0",
    fontSize: "larger",
  },
  logo: {
    height: 18,
  },
});

function AfterLoginT() {
  const classes = useStyle();

  return (
    <Box className={classes.container}>
      <Box className={classes.wraper}>
        <AccountCircleIcon className={classes.icon} />
        <span className={classes.span}>My Profile</span>
      </Box>

      <Box className={classes.wraper}>
        <OfflineBoltIcon className={classes.icon} />
        <span className={classes.span}>SuperCoin Zone</span>
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
        <CallToActionIcon className={classes.icon} />
        <span className={classes.span}> Orders</span>
      </Box>

      <Box className={classes.wraper}>
        <FavoriteIcon className={classes.icon} />
        <span className={classes.span}>WishList</span>
      </Box>
      <Box className={classes.wraper}>
        <ChatIcon className={classes.icon} />
        <span className={classes.span}>My Chats</span>
      </Box>
      <Box className={classes.wraper}>
        <ConfirmationNumberIcon className={classes.icon} />
        <span className={classes.span}>Coupons</span>
      </Box>
      <Box className={classes.wraper}>
        <AccountBalanceWalletIcon className={classes.icon} />
        <span className={classes.span}>Gift Cards</span>
      </Box>
      <Box className={classes.wraper}>
        <NotificationsIcon className={classes.icon} />
        <span className={classes.span}>Notifications</span>
      </Box>
      <Box className={classes.wraper}>
        <PowerSettingsNewIcon className={classes.icon} />
        <span className={classes.span}>Logout</span>
      </Box>
    </Box>
  );
}

export default AfterLoginT;
