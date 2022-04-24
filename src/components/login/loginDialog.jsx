import React, { useState, useEffect } from "react";

import {
  Box,
  Button,
  Dialog,
  DialogContent,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import axios from "axios";

const URL = "http://localhost:8080";

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
    width: "35%",
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
    padding: "35px 35px",
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

  text1: {
    fontSize: 12,
    color: "#878787",
    fontWeight: 400,
  },
  span: {
    color: "#2874f0",
    cursor: "pointer",
  },
  textOr: {
    color: "#878787",
    textAlign: "center",
  },
  createAcc: {
    color: "#2874f0",
    fontWeight: 600,
    fontSize: 15,
    cursor: "pointer",
    marginTop: 60,
    textAlign: "center",
  },

  textField: {
    paddingLeft: 7,
    "&&&:before": {
      borderBottom: "1px solid #aaa8a8e1",
    },
    "&&&:after": {
      borderBottom: "1px solid #2874f0",
    },
  },
  signup: {
    display: "flex",
    flexDirection: "column",
    width: "57%",
    padding: "10px 35px",
    "& > *": {
      marginTop: 10,
    },
  },
  continueBtn: {
    background: "#fb641b",
    color: "#ffffff",
    fontWeight: 600,
    height: 50,
    marginTop: 30,
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
    "&:hover ": {
      background: "#fb641b",
      boxShadow: "none",
    },
  },
  userBtn: {
    textTransform: "none",
    background: "#fff",
    color: "#2874f0",
    fontWeight: 600,
    marginTop: 22,
    boxShadow: "2px 2px 2px 3px #ddd3d39f",
    height: 50,
    "&:hover": {
      background: "#fff",
    },
  },
});

const signUpInitialValue = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValue = {
  email: "",
  password: "",
  fullName: "",
};
const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here",
    subHeading: "Signup to get started",
  },
};

function LoginDialog({ open, setOpen, setUser }) {
  const classes = useStyle();

  const [login, setLogin] = useState(loginInitialValue);
  const [signup, setSignup] = useState(signUpInitialValue);
  const [account, toggleAccount] = useState(accountInitialValues.login);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setLogin({ ...login, [name]: value });
  };

  const handleSignupChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setSignup({ ...signup, [name]: value });
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const toggleLogin = () => {
    toggleAccount(accountInitialValues.login);
  };

  const loginUser = async (e) => {
    const { email, password } = login;
    await axios
      .post(`${URL}/api/signin`, { email, password })

      .then((res) => {
        const {
          data: { user },
        } = res;
        console.log(user);
        setLogin(loginInitialValue);
        handleClose();
        setUser(user.fullName);
        localStorage.setItem("name", user.fullName);
        // console.log(localStorage.setItem("login", res.data));
        console.log("login Sucessful");
      })
      .catch((err) => {
        console.log(err);
        console.log("clicked in catch section");
      });
  };

  const userSignup = (e) => {
    e.preventDefault();

    const { firstName, lastName, userName, email, password, phone } = signup;
    axios
      .post(`${URL}/api/signup`, {
        firstName,
        lastName,
        userName,
        email,
        password,
        phone,
      })
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
        setSignup(signUpInitialValue);
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });
  };
  // useEffect(() => {}, [login]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      classes={{ paper: classes.dialogPaper }}
    >
      <DialogContent>
        {account.view === "login" ? (
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
                name="email"
                value={login.email}
                InputProps={{ classes: { underline: classes.textField } }}
              />

              <TextField
                onChange={handleChange}
                label="Enter Password"
                name="password"
                value={login.password}
                InputProps={{ classes: { underline: classes.textField } }}
              />

              <Typography className={classes.text1}>
                By continuing, you agree to Flipkart's
                <span className={classes.span}> Terms of Use </span>
                and
                <span className={classes.span}> Privacy Policy </span> .
              </Typography>

              <Button
                variant="contained"
                className={classes.loginBtn}
                onClick={loginUser}
              >
                Login
              </Button>

              <Typography className={classes.textOr}>OR</Typography>

              <Button variant="contained" className={classes.requestBtn}>
                Request OTP
              </Button>
              <Typography className={classes.createAcc} onClick={toggleSignup}>
                New to Flipkart? Create an account
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box className={classes.wraper}>
            <Box className={classes.container}>
              <Typography variant="h5" className={classes.loginText}>
                Looks like you're new here!
              </Typography>
              <Typography className={classes.text}>
                Sign up with your mobile number to get started
              </Typography>
            </Box>

            <Box className={classes.signup}>
              <TextField
                autoFocus={true}
                autoComplete="off"
                label="Enter First Name"
                name="firstName"
                value={signup.firstName}
                onChange={handleSignupChange}
                InputProps={{ classes: { underline: classes.textField } }}
              />
              <TextField
                label="Enter  Last Name"
                name="lastName"
                value={signup.lastName}
                onChange={handleSignupChange}
                InputProps={{ classes: { underline: classes.textField } }}
                autoComplete="off"
              />
              <TextField
                label="Enter UserName"
                name="userName"
                value={signup.userName}
                onChange={handleSignupChange}
                InputProps={{ classes: { underline: classes.textField } }}
                autoComplete="off"
              />
              <TextField
                label="Enter Email"
                name="email"
                value={signup.email}
                onChange={handleSignupChange}
                InputProps={{ classes: { underline: classes.textField } }}
                autoComplete="off"
              />
              <TextField
                label="Enter Mobile number"
                name="phone"
                value={signup.phone}
                onChange={handleSignupChange}
                InputProps={{ classes: { underline: classes.textField } }}
                autoComplete="off"
              />
              <TextField
                label="Enter Password"
                name="password"
                value={signup.password}
                onChange={handleSignupChange}
                InputProps={{ classes: { underline: classes.textField } }}
                autoComplete="off"
              />

              <Button className={classes.continueBtn} onClick={userSignup}>
                Continue
              </Button>
              <Button className={classes.userBtn} onClick={toggleLogin}>
                Existing User? Log in
              </Button>
            </Box>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default LoginDialog;
