import { useState, useEffect } from "react";
import { Box, makeStyles, Typography, Button } from "@material-ui/core";

import StarRateIcon from "@material-ui/icons/StarRate";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FlashOnIcon from "@material-ui/icons/FlashOn";

const useStyle = makeStyles({
  container: {
    padding: "20px 15px 150px 15px",
  },
  wraper: {
    display: "flex",
    background: "#ffffff",
    padding: 10,
  },
  img: {
    height: 50,
    width: 22,
  },
  imgDiv: {
    height: 50,
    width: 22,
    padding: "10px 20px 10px 20px",
    position: "relative",
    border: "1px solid #f0f0f0",
  },
  singleImgDiv: {
    padding: "13px 100px 13px 100px",
    border: "1px solid #f0f0f0",
    borderLeft: "none",
  },
  singleImg: {
    height: 352,
    width: 164,
  },
  price: {
    fontWeight: 700,
    margin: "5px 5px 20px 0",
  },
  textBox: {
    marginLeft: 30,
    padding: 5,
  },
  rating: {
    display: "flex",
    color: "#fff",
    width: 33,
    padding: "1px 5px 1px 5px",
    background: "green",
    alignItems: "center",
    borderRadius: 5,
    margin: "20px 0 20px 0",
  },
  star: {
    fontSize: 18,
  },
  priceDiv: {
    display: "flex",
  },
  buttonDiv: {
    marginTop: 15,

    width: "100%",
  },
  orderBtn: {
    width: 176,
    height: 53,
    background: "#ff9f00",
    boxShadow: "none",
    color: "#fff",
    borderRadius: 2,
    "&:hover": {
      background: "#ff9f00",
      boxShadow: "none",
    },
  },
  cartBtn: {
    width: 176,
    height: 53,
    background: "#fb641b",
    marginLeft: 8,
    boxShadow: "none",
    borderRadius: 2,
    color: "#fff",
    "&:hover": {
      background: "#fb641b",
      boxShadow: "none",
    },
  },
  oldPrice: {
    margin: "12px 0 0 10px",
    textDecoration: "line-through",
    color: "#878787",
  },
  percent: {
    margin: "12px 0 0 15px",
    color: "green",
    fontWeight: 600,
  },
  icon: {
    color: "#2dc653",
    fontSize: 18,
    margin: "10px 10px 0 0",
  },
  text: {
    fontSize: 14,
    margin: "9px 0 0 0",
  },
  descDiv: {
    display: "flex",
    marginTop: 50,
    color: "#878787",
  },
  descText: {
    fontSize: 15,
    marginLeft: 40,
    color: "black",
  },
});
function ProductDescription() {
  const classes = useStyle();
  return (
    <Box className={classes.container}>
      <Box className={classes.wraper}>
        <Box>
          <Box className={classes.imgDiv}>
            <img
              src="https://rukminim2.flixcart.com/image/416/416/ktbu6q80/mobile/f/s/e/8s-5g-rmx3381-realme-original-imag6zhgra57dtqe.jpeg?q=70"
              alt=""
              className={classes.img}
            />
          </Box>
          <Box className={classes.imgDiv}>
            <img
              src="https://rukminim2.flixcart.com/image/416/416/ktbu6q80/mobile/k/z/p/8s-5g-rmx3381-realme-original-imag6zhgavzwf6dm.jpeg?q=70"
              alt="img"
              className={classes.img}
            />
          </Box>
          <Box className={classes.imgDiv}>
            <img
              src="https://rukminim2.flixcart.com/image/416/416/ktbu6q80/mobile/b/w/4/8s-5g-rmx3381-realme-original-imag6zhgqfaajc3q.jpeg?q=70"
              alt="img"
              className={classes.img}
            />
          </Box>
          <Box className={classes.imgDiv}>
            <img
              src="https://rukminim2.flixcart.com/image/416/416/ktbu6q80/mobile/a/v/3/8s-5g-rmx3381-realme-original-imag6zhg5hhgqkba.jpeg?q=70"
              alt="img"
              className={classes.img}
            />
          </Box>
          <Box className={classes.imgDiv}>
            <img
              src="https://rukminim2.flixcart.com/image/416/416/ktbu6q80/mobile/5/l/b/8s-5g-rmx3381-realme-original-imag6zhg7znchvu3.jpeg?q=70"
              alt="img"
              className={classes.img}
            />
          </Box>
        </Box>
        <Box>
          <Box className={classes.singleImgDiv}>
            <img
              src="https://rukminim2.flixcart.com/image/416/416/ktbu6q80/mobile/f/s/e/8s-5g-rmx3381-realme-original-imag6zhgra57dtqe.jpeg?q=70"
              alt=""
              className={classes.singleImg}
            />
          </Box>

          <Box className={classes.buttonDiv}>
            <Button variant="contained" className={classes.orderBtn}>
              <ShoppingCartIcon fontSize="small" />
              Add to cart
            </Button>

            <Button variant="contained" className={classes.cartBtn}>
              <FlashOnIcon fontSize="small" />
              Order it
            </Button>
          </Box>
        </Box>

        <Box className={classes.textBox}>
          <Typography variant="h6">
            realme 8s 5G (Universe Purple, 128 GB) (8 GB RAM)
          </Typography>

          <Box className={classes.rating}>
            <Typography style={{ fontSize: 13 }}>4.4</Typography>
            <StarRateIcon className={classes.star} />
          </Box>
          <Box className={classes.priceDiv}>
            <Typography variant="h5" className={classes.price}>
              ₹20,099
            </Typography>
            <Typography className={classes.oldPrice}>₹22,099</Typography>
            <Typography className={classes.percent}>12% off</Typography>
          </Box>

          <Box>
            <Typography variant="h6">Available offers</Typography>

            <Box style={{ display: "flex" }}>
              <LocalOfferIcon className={classes.icon} />

              <Typography className={classes.text}>
                <b>Bank Offer</b> 5% Cashback on Flipkart Axis Bank Card
                <span style={{ color: "blue" }}> T&C</span>
              </Typography>
            </Box>

            <Box style={{ display: "flex" }}>
              <LocalOfferIcon className={classes.icon} />

              <Typography className={classes.text}>
                <b> Special Price</b> Get extra ₹2900 off (price inclusive of
                discount)
                <span style={{ color: "blue" }}> T&C</span>
              </Typography>
            </Box>

            <Box style={{ display: "flex" }}>
              <LocalOfferIcon className={classes.icon} />

              <Typography className={classes.text}>
                <b>Freebie</b> 25% Off on Discovery+ Subscription
                <span style={{ color: "blue" }}> T&C</span>
              </Typography>
            </Box>

            <Box style={{ display: "flex" }}>
              <LocalOfferIcon className={classes.icon} />

              <Typography className={classes.text}>
                <b>Freebie</b> Classes - 3 Class Pack
                <span style={{ color: "blue" }}> T&C</span>
              </Typography>
            </Box>
          </Box>
          <Box className={classes.descDiv}>
            <Typography>Description</Typography>
            <Typography className={classes.descText}>
              The Samsung Galaxy F12 features a stylish design and innovative
              features so that you can enjoy using the mobile phone for all that
              you need. Thanks to its 6000 mAh battery, you will have a blast
              using your phone for a long time while you stream content and much
              more. It provides surround sound with Dolby Atmos so that you can
              delve into a world of rich music. And, it’s equipped with features
              that ensure the protection of your mobile phone.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductDescription;
