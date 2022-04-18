import { Box, Typography, makeStyles } from "@material-ui/core";

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
    padding: "35px 0 20px 30px",
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
  const classes = useStyle();
  return (
    <Box className={classes.container}>
      <Box>
        <Box className={classes.profile1}>
          <Typography>Hello</Typography>
          <Typography>Vinay Kumar Maurya</Typography>
        </Box>
        <Box className={classes.profile2}>
          <Typography>MY ORDERS</Typography>
        </Box>
      </Box>
      <Box className={classes.wraper}>
        <Typography>Personal Information</Typography>
        <Typography className={classes.textBox}>Vinay Kumar Maurya</Typography>

        <Typography>Email Address</Typography>
        <Typography className={classes.textBox}>
          vinaymaurya105@gmail.com
        </Typography>

        <Typography>Mobile Number</Typography>
        <Typography className={classes.textBox}>+91-7007804032</Typography>

        <Typography>FAQs</Typography>
        <Typography>
          What happens when I update My email address ( or mobile number)
        </Typography>
      </Box>
    </Box>
  );
}
export default MyProfile;
