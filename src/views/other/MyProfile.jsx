import { useState, useEffect } from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import axios from "axios";

const URL = "http://localhost:8080";

const useStyle = makeStyles({
  container: {
    display: "flex",
    padding: "10px 30px 20px 30px",
    background: "#f2f2f2",
  },
  profile1: {
    background: "#fff",
    padding: 20,
    border: "2px solid #f2f2f2",
  },
  profile2: {
    background: "#fff",
    marginTop: 20,
    border: "2px solid #f2f2f2",
    padding: 20,
    textAlign: "center",

    color: "#878787",
  },
  wraper: {
    background: "#ffffff ",
    padding: "35px 0 20px 50px",
    marginLeft: 50,
    width: "75%",
  },
  textBox: {
    padding: 8,
    border: "1px solid #a7a5a575",
    width: 300,
    background: "  #f2f2f2a4",
    color: "#878787",
    margin: "30px 0 50px 0 ",
  },
});

function MyProfile() {
  const [profile, setProfile] = useState([]);

  const classes = useStyle();

  const id = localStorage.getItem("id");

  useEffect(() => {
    axios
      .get(`${URL}/api/signin/${id}`)
      .then((res) => {
        // console.log(res.data);
        setProfile([res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (profile.length === 0) {
    return null;
  }

  return (
    <Box>
      {profile.map((user) => {
        const { firstName, lastName, email, phone, _id } = user;
        let fullName = `${firstName} ${lastName}`;
        return (
          <Box key={_id} className={classes.container}>
            <Box>
              <Box className={classes.profile1}>
                <Typography>Hello</Typography>
                <Typography>{fullName}</Typography>
              </Box>
              <Box className={classes.profile2}>
                <Typography>MY ORDERS</Typography>
              </Box>
            </Box>

            <Box className={classes.wraper}>
              <Typography>Personal Information</Typography>
              <Typography className={classes.textBox}>{fullName}</Typography>

              <Typography>Email Address</Typography>
              <Typography className={classes.textBox}>{email}</Typography>
              <Typography>Mobile Number</Typography>
              <Typography className={classes.textBox}>+91-{phone}</Typography>
              <Typography>FAQs</Typography>
              <Typography>
                What happens when I update My email address ( or mobile number)
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
export default MyProfile;
