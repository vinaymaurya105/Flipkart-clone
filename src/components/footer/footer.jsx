import { Box, Container, makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles({
  wraper: {
    width: "100%",
    // height: 340,
    background: "#0b152c",
    color: "#fff",
  },
  container: {
    margin: "0 0 0 65px",
    padding: "35px 0 0",
    display: "flex",
  },
  subwraper: {
    marginRight: 20,
    width: 172,
    height: 193,
  },
  text: {
    fontSize: 12,
    height: 24,
  },
});

function Footer() {
  const classes = useStyle();
  return (
    <Box className={classes.wraper}>
      <Box className={classes.container}>
        <Box className={classes.subwraper}>
          <Typography className={classes.text}>ABOUT</Typography>

          <Typography className={classes.text}>Contact us</Typography>
          <Typography className={classes.text}>About us</Typography>
          <Typography className={classes.text}>Contact us</Typography>
          <Typography className={classes.text}>Careers</Typography>
          <Typography className={classes.text}>Flipkart Stories</Typography>
          <Typography className={classes.text}>Press</Typography>
          <Typography className={classes.text}>Flipkart WholeSale</Typography>
          <Typography className={classes.text}>
            Corporate Information
          </Typography>
        </Box>

        <Box className={classes.subwraper}>
          <Typography className={classes.text}>HELP</Typography>

          <Typography className={classes.text}>Payments</Typography>
          <Typography className={classes.text}>Shipping</Typography>
          <Typography className={classes.text}>
            Cancellation & Returns
          </Typography>
          <Typography className={classes.text}>FAQ</Typography>
          <Typography className={classes.text}>Report Infringement</Typography>
        </Box>

        <Box className={classes.subwraper}>
          <Typography className={classes.text}>POLICY</Typography>
          <Typography className={classes.text}>Return Policy</Typography>
          <Typography className={classes.text}>Terms Of Use</Typography>
          <Typography className={classes.text}>Security</Typography>
          <Typography className={classes.text}>Privacy</Typography>
          <Typography className={classes.text}>Sitemap</Typography>
        </Box>

        <Box className={classes.subwraper}>
          <Typography className={classes.text}>SOCIAL</Typography>
          <Typography className={classes.text}>FaceBook</Typography>
          <Typography className={classes.text}>Twiter</Typography>
          <Typography className={classes.text}>Youtube</Typography>
        </Box>

        <Box>
          <Typography className={classes.text}>Mail Us:</Typography>
          <Typography style={{ color: "#2874f0" }} className={classes.text}>
            Email : vinaymaurya105@gmail.com
          </Typography>
          <Typography className={classes.text}>
            Flipkart Clone Private Limited,
          </Typography>
          <Typography className={classes.text}>
            Address : Knowledge Park III, Greater Noida, G.B. Nagar, 201306,
            Uttar Pradesh, India
          </Typography>
        </Box>

        <Box>
          <Typography className={classes.text}>
            Registered Office Address :{" "}
          </Typography>
          <Typography className={classes.text}></Typography>
          <Typography className={classes.text}>
            Address : Knowledge Park III, Greater Noida, G.B. Nagar, 201306,
            Uttar Pradesh, India
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
export default Footer;
