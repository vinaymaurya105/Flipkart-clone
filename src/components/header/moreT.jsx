import { Box, makeStyles } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import GetAppIcon from "@material-ui/icons/GetApp";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import LocalMallIcon from "@material-ui/icons/LocalMall";

const useStyle = makeStyles({
  wraper: {
    background: "#ffffff",
    margin: "-6px -8px -7px -8px",
    borderRadius: 3,
    boxShadow: "0 2px  2px 2px #f2f2f2",
  },

  container: {
    display: "flex",
    alignItems: "center",
    fontSize: 16,
    padding: 10,
    cursor: "pointer",
    borderTop: "1px solid rgb(212, 212, 212)",
    "&:hover": {
      background: "#f8f9fa",
    },
  },

  span: {
    margin: "11px 18px   ",
    color: "rgba(0, 0, 0, 0.8)",
  },
});

function MoreT() {
  const classes = useStyle();

  return (
    <Box className={classes.wraper}>
      <Box className={classes.container} style={{ borderTop: "none" }}>
        <NotificationsIcon fontSize="small" color="primary" />
        <span className={classes.span}>Notification Preferences</span>
      </Box>

      <Box className={classes.container}>
        <LocalMallIcon fontSize="small" color="primary" />
        <span className={classes.span}>Sell on Flipkart</span>
      </Box>

      <Box className={classes.container}>
        <LiveHelpIcon fontSize="small" color="primary" />
        <span className={classes.span}>24x7 Customer Care</span>
      </Box>

      <Box className={classes.container}>
        <TrendingUpIcon fontSize="small" color="primary" />
        <span className={classes.span}>Advertise</span>
      </Box>

      <Box className={classes.container}>
        <GetAppIcon fontSize="small" color="primary" />
        <span className={classes.span}>Download App</span>
      </Box>
    </Box>
  );
}

export default MoreT;
