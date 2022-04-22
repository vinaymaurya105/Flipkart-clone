import { useState, useEffect } from "react";
import { Box, makeStyles, Typography, Button } from "@material-ui/core";

import StarRateIcon from "@material-ui/icons/StarRate";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import axios from "axios";

const URL = "http://localhost:8080";

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
    marginLeft: 50,
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
  ratingTxt: {
    margin: "20px 0 20px 10px",
    color: "#878787",
    fontSize: 15,
    fontWeight: 600,
  },
  flipImg: {
    height: 24,
    margin: "20px 0 20px 10px",
  },
  extraPrice: {
    marginTop: "-6px ",
    color: "green ",
    fontSize: 15,
    fontWeight: 600,
  },
});
function ProductDescription(props) {
  const [data, setData] = useState([]);

  const classes = useStyle();

  useEffect(() => {
    const { productId } = props.match.params;
    axios
      .get(`${URL}/api/${productId}`)
      .then((res) => {
        // console.log(res.data);
        setData([res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (data.length === 0) {
    return null;
  }

  return (
    <Box className={classes.container}>
      <Box className={classes.wraper}>
        <Box>
          {data[0].productPictures.map((image) => {
            const { _id, img } = image;
            return (
              <Box key={_id} className={classes.imgDiv}>
                <img
                  src={`${URL}/public/${img}`}
                  alt="img"
                  className={classes.img}
                />
              </Box>
            );
          })}
        </Box>

        {data.map((product) => {
          const {
            name,
            price,
            productPictures,
            _id,
            offerPrice,
            description,
            rating,
          } = product;

          let totalPrice = offerPrice || price + 4000;

          return (
            <Box key={_id} style={{ display: "flex" }}>
              <Box>
                <Box className={classes.singleImgDiv}>
                  <img
                    src={`${URL}/public/${productPictures[0].img}`}
                    alt="img"
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
                <Typography variant="h6">{name}</Typography>
                <Box style={{ display: "flex" }}>
                  <Box className={classes.rating}>
                    <Typography style={{ fontSize: 13 }}>
                      {rating || 4.4}
                    </Typography>
                    <StarRateIcon className={classes.star} />
                  </Box>
                  <Typography className={classes.ratingTxt}>
                    32904 Ratings & 3129 Reviews
                  </Typography>
                  <img
                    src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
                    alt=""
                    className={classes.flipImg}
                  />
                </Box>
                <Typography className={classes.extraPrice}>
                  Extra ₹{totalPrice - price} off
                </Typography>
                <Box className={classes.priceDiv}>
                  <Typography variant="h5" className={classes.price}>
                    ₹{price}
                  </Typography>
                  <Typography className={classes.oldPrice}>
                    ₹{totalPrice}
                  </Typography>
                  <Typography className={classes.percent}>
                    {Math.floor(((totalPrice - price) / totalPrice) * 100)}% off
                  </Typography>
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
                      <b> Special Price</b> Get extra ₹2900 off (price inclusive
                      of discount)
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
                    {description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default ProductDescription;
