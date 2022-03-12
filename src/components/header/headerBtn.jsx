import { Box, Button, Typography, makeStyles, Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";

const usestyle = makeStyles((theme) => ({
  loginBtn: {
    background: "#ffffff",
    color: "#2874f0",
    textTransform: "unset",
    fontWeight: 600,
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
}));

function HeaderBtn() {
  const classes = usestyle();
  return (
    <Box className={classes.container}>
      <Link>
        <Button variant="contained" className={classes.loginBtn}>
          Login
        </Button>
      </Link>
      <Link>
        <Box className={classes.iconWrap}>
          <Typography className={classes.text}>More</Typography>
          <ExpandMoreIcon className={classes.icon} />
        </Box>
      </Link>
      <Link to="/cart" className={classes.wraper}>
        <Badge badgeContent={4} color="error">
          <ShoppingCartIcon />
        </Badge>
        <Typography className={classes.cart}>Cart</Typography>
      </Link>
    </Box>
  );
}

export default HeaderBtn;
