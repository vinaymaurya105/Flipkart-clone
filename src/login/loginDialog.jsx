import React, { useState } from "react";

import {
  Box,
  Button,
  Dialog,
  DialogContent,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyle = makeStyles({
  dialogPaper: {
    height: "79vh",
    width: "101vh",
    maxWidth: "unset !important",
  },
  wraper: {
    display: "flex",
    margin: -24,
  },

  container: {
    backgroundImage: `url(${"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"})`,
    background: "#2874f0",
    backgroundPosition: "center 85%",
    backgroundRepeat: "no-repeat",
    height: "66.2vh",
    width: "48%",
    padding: "45px 35px",
    "& > *": {
      color: "#ffffff",
    },
  },
  loginText: {
    fontWeight: 600,
    fontSize: 28,
  },
  text: {
    fontSize: 18,
    marginTop: 25,
  },
  login: {
    display: "flex",
    flexDirection: "column",
    padding: "30px 35px",
    "& > *": {
      marginTop: 20,
    },
  },
  loginBtn: {
    background: "#fb641b",
    color: "#ffffff",
    fontWeight: 600,
    height: 50,
    textTransform: "none",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
    "&:hover ": {
      background: "#fb641b",
      boxShadow: "none",
    },
  },
  requestBtn: {
    textTransform: "none",
    background: "#fff",
    color: "#2874f0",
    fontWeight: 600,
    height: 50,
    "&:hover": {
      background: "#fff",
    },
  },
});

function LoginDialog({ open, setOpen }) {
  const classes = useStyle();

  const [login, setLogin] = useState();

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setLogin(e.target.value);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      classes={{ paper: classes.dialogPaper }}
    >
      <DialogContent>
        <Box className={classes.wraper}>
          <Box className={classes.container}>
            <Typography variant="h5" className={classes.loginText}>
              Login
            </Typography>
            <Typography className={classes.text}>
              Get access to your Orders, Wishlist and Recomandations
            </Typography>
          </Box>

          <Box className={classes.login}>
            <TextField
              autoFocus={true}
              onChange={handleChange}
              label="Enter Email / Mobile number"
              name="username"
            ></TextField>

            <TextField
              onChange={handleChange}
              label="Enter Password"
              name="password"
            ></TextField>

            <Typography>
              By continuing, you agree to Flipkart's
              <span style={{ color: "blue" }}> Terms of Use </span>
              and
              <span style={{ color: "blue" }}> Privacy Policy </span> .
            </Typography>

            <Button variant="contained" className={classes.loginBtn}>
              Login
            </Button>

            <Typography>OR</Typography>

            <Button variant="contained" className={classes.requestBtn}>
              Request OTP
            </Button>
            <Typography>New to Flipkart? Create an account</Typography>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default LoginDialog;
