import { Box, makeStyles, Typography } from "@material-ui/core";

import StarsIcon from "@material-ui/icons/Stars";
import WorkIcon from "@material-ui/icons/Work";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import HelpIcon from "@material-ui/icons/Help";

const useStyle = makeStyles({
  wraper: {
    width: "100%",
    // height: 345,
    background: "#0b152c",
    color: "#fff",
    marginBottom: 0,
  },
  container: {
    margin: "0 0 0 65px",
    padding: "35px 0 0",
    display: "flex",
  },
  subwraper: {
    width: 172,
    height: 193,
  },
  text: {
    fontSize: 12,
    height: 24,
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  addText: {
    fontSize: 12,
    height: 18,
  },
  heading: {
    fontSize: 12,
    marginBottom: 10,
    color: "#878787",
  },
  mailBox: {
    width: 282,
    height: 193,
  },
  subMailBox: {
    padding: "0 25px",
    borderLeft: "1px solid #454d5e",
    height: 118,
  },
  addBox: {
    width: 245,
    height: 193,
    padding: "0 0 0 14px",
    margin: "0 0  10px",
  },
  footer: {
    borderTop: "1px solid #454d5e",
    width: "100%",
    marginTop: 40,
    padding: "25px 0",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  icon: {
    height: 18,
    color: "#ffb703",
  },
  spanText: {
    fontSize: 14,
    margin: "0px 0px 0px 8px",
    textDecoration: "none",
    color: "#fff",
    cursor: "pointer",
  },
});

function Footer() {
  const classes = useStyle();
  return (
    <Box className={classes.wraper}>
      <Box className={classes.container}>
        <Box className={classes.subwraper}>
          <Typography className={classes.heading}>ABOUT</Typography>

          <Typography className={classes.text}>Contact us</Typography>
          <Typography className={classes.text}>About us</Typography>

          <Typography className={classes.text}>Careers</Typography>
          <Typography className={classes.text}>Flipkart Stories</Typography>
          <Typography className={classes.text}>Press</Typography>
          <Typography className={classes.text}>Flipkart WholeSale</Typography>
          <Typography className={classes.text}>
            Corporate Information
          </Typography>
        </Box>

        <Box className={classes.subwraper}>
          <Typography className={classes.heading}>HELP</Typography>

          <Typography className={classes.text}>Payments</Typography>
          <Typography className={classes.text}>Shipping</Typography>
          <Typography className={classes.text}>
            Cancellation & Returns
          </Typography>
          <Typography className={classes.text}>FAQ</Typography>
          <Typography className={classes.text}>Report Infringement</Typography>
        </Box>

        <Box className={classes.subwraper}>
          <Typography className={classes.heading}>POLICY</Typography>

          <Typography className={classes.text}>Return Policy</Typography>
          <Typography className={classes.text}>Terms Of Use</Typography>
          <Typography className={classes.text}>Security</Typography>
          <Typography className={classes.text}>Privacy</Typography>
          <Typography className={classes.text}>Sitemap</Typography>
        </Box>

        <Box className={classes.subwraper}>
          <Typography className={classes.heading}>SOCIAL</Typography>

          <Typography className={classes.text}>FaceBook</Typography>
          <Typography className={classes.text}>Twiter</Typography>
          <Typography className={classes.text}>Youtube</Typography>
        </Box>

        <Box className={classes.mailBox}>
          <Box className={classes.subMailBox}>
            <Typography className={classes.heading}>Mail Us:</Typography>

            <Typography className={classes.addText}>
              Flipkart Clone Private Limited,
            </Typography>

            <Typography
              style={{ color: "#2874f0" }}
              className={classes.addText}
            >
              Email : vinaymaurya105@gmail.com
            </Typography>
            <Typography className={classes.addText}>
              Address : Knowledge Park III, Greater Noida, G.B. Nagar, 201306,
              Uttar Pradesh, India
            </Typography>
          </Box>
        </Box>

        <Box className={classes.addBox}>
          <Typography className={classes.heading}>
            Registered Office Address :
          </Typography>

          <Typography className={classes.addText}>
            Flipkart Clone Private Limited,
          </Typography>
          <Typography className={classes.addText}>
            Address : Knowledge Park III, Greater Noida, G.B. Nagar, 201306,
            Uttar Pradesh, India
          </Typography>
        </Box>
      </Box>

      <Box className={classes.footer}>
        <Box>
          <WorkIcon className={classes.icon} />
          <a
            href="https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect"
            className={classes.spanText}
          >
            Become a Seller
          </a>
        </Box>
        <Box>
          <StarsIcon className={classes.icon} />
          <span className={classes.spanText}>Advertise</span>
        </Box>
        <Box>
          <CardGiftcardIcon className={classes.icon} />
          <span className={classes.spanText}>Gift Cards</span>
        </Box>
        <Box>
          <HelpIcon className={classes.icon} />
          <span className={classes.spanText}>Help Center</span>
        </Box>
        <Typography style={{ fontSize: 14 }}>
          &copy; 2022 FlipkartClone.com
        </Typography>
        <img
          src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_69e7ec.svg"
          alt="cardimage"
        />
      </Box>
    </Box>
  );
}
export default Footer;
