import { Badge, Box, Button, Typography, makeStyles } from "@material-ui/core";
import GppGoodIcon from "@mui/icons-material/GppGood";

const useStyle = makeStyles({
  container: {
    display: "flex",
    background: "#f2f2f2",
    padding: "30px 50px 30px 50px",
  },
  wraper: {
    border: "1px solid #f0f0f0",
    width: 860,
  },
  cartBox: {
    display: "flex",
    background: "#fff",
  },
  cartTxt: {
    padding: "10px 24px",
    color: "#212121",
    marginRight: 40,
  },
  delevery: {
    margin: "5px 0 0 100px",
    padding: "13px  20px",
    color: "#212121",
    marginRight: 40,
    border: "1px solid #f0f0f0",
    borderBottom: "none",
    width: 420,
    borderRadius: 5,
    fontSize: 14,
  },
  text: {
    float: "right",
    color: "green",
  },
  about: {
    padding: "0 24px 12px",
  },

  productDiv: {
    padding: 24,
    borderTop: "1px solid #f0f0f0",
    background: "#fff",
  },
  img: {
    height: 112,
    width: 73,
    margin: "0px 20px 20px 20px",
  },
  seller: {
    fontSize: 14,
    color: "#878787",
    margin: "12px 0 2px 0",
  },
  flipImg: {
    height: 15,
    margin: "15px 0 2px 6px",
  },
  offerPrice: {
    fontWeight: 700,
    margin: "15px 8px 4px 0",
    fontSize: 18,
  },
  oldPrice: {
    margin: "19px 0 4px 0px",
    fontSize: 14,
    textDecoration: "line-through",
    color: "#878787",
    fontWeight: 600,
  },
  percent: {
    margin: "19px 0 4px 11px",
    color: "green",
    fontSize: 14,
    fontWeight: 600,
  },
  policy: {
    fontSize: 12,
    color: "#878787",
    marginTop: 15,
  },
  countDiv: {
    display: "flex",
    padding: "15px 0 0 0",
  },
  negBtn: {
    height: 18,
    width: 18,
    padding: 5,
    border: "1px solid #cecbcb",
    borderRadius: "50%",
    textAlign: "center",
    fontWeight: 600,
    cursor: "pointer",
  },
  number: {
    height: 16,
    width: 36,
    padding: 5,
    border: "1px solid #cecbcb",
    textAlign: "center",
    margin: "1px 5px ",
    borderRadius: 2,
  },
  remButton: {
    margin: "-4px 0px 0 20px",
    fontSize: 16,
    fontWeight: 600,
    "&:hover": {
      background: "unset",
      color: "#2874f0",
    },
  },
  btnDiv: {
    padding: "16px 22px ",
    borderTop: "1px solid #f0f0f0",
    boxShadow: "0 -2px 10px 0 rgb(0 0 0 / 10%)",
    background: "#fff",
    textAlign: "right",
  },
  orderBtn: {
    background: "#fb641b",
    padding: "13px 63px",
    borderRadius: 2,
    fontSize: 16,
    color: "#fff",
    "&:hover": {
      background: "#fb641b",
    },
  },
  mainDiv: {
    background: "#fff",
    marginLeft: 18,
    width: 350,
    height: 348,
    padding: "8px  8px 8px 0px",
  },
  priceTxt: {
    padding: "11px 24px",
    textTransform: "uppercase",
    color: "#878787",
    fontWeight: 600,
    borderBottom: "1px solid #f0f0f0",
    marginBottom: 9,
  },
  priceDiv: {
    padding: "0px 24px",
    margin: "20px 0",
    display: "flex",
    justifyContent: "space-between",
  },
  totalAmount: {
    padding: "20px 24px",
    display: "flex",
    justifyContent: "space-between",
    borderTop: "1px dashed #e0e0e0",
  },

  totalPrice: {
    fontSize: 18,
    fontWeight: 600,
  },
  save: {
    padding: "12px 24px",
    borderTop: "1px dashed #e0e0e0",
    color: "#388e3c",
    fontWeight: 600,
  },
  security: {
    display: "flex",

    width: 364,
    marginLeft: 18,
    padding: "35px 24px 50px  24px  ",
    color: "#878787",
  },
});
function Cart() {
  const classes = useStyle();
  return (
    <Box className={classes.container}>
      <Box className={classes.wraper}>
        <Box className={classes.cartBox}>
          <Typography variant="h6" className={classes.cartTxt}>
            My Cart (<Badge>1</Badge>)
          </Typography>
          <Typography className={classes.delevery}>
            Deliver to :
            <span style={{ fontWeight: 600 }}> Greater Noida - 201310</span>
          </Typography>
        </Box>
        <Box className={classes.productDiv}>
          <Box style={{ display: "flex" }}>
            <Box>
              <img
                src="https://rukminim2.flixcart.com/image/224/224/kzd147k0/mobile/m/c/f/-original-imagbe5qknarjywp.jpeg?q=90"
                alt=""
                className={classes.img}
              />
            </Box>
            <Box className={classes.about}>
              <Typography>
                vivo T1 5G (Rainbow Fantasy, 128 GB) (6 GB RAM)
              </Typography>
              <Box style={{ display: "flex" }}>
                <Typography className={classes.seller}>
                  Seller:Flashtech Retail
                </Typography>
                <img
                  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
                  alt=""
                  className={classes.flipImg}
                />
              </Box>

              <Box style={{ display: "flex" }}>
                <Typography variant="h6" className={classes.offerPrice}>
                  ₹16,990
                </Typography>
                <Typography className={classes.oldPrice}> ₹20,990</Typography>
                <Typography className={classes.percent}>16% off</Typography>
                <Typography className={classes.percent}>
                  4 offers applied
                </Typography>
              </Box>
              <Typography style={{ fontSize: 14 }}>
                + ₹29 Packaging charges
              </Typography>
            </Box>
            <Box>
              <Typography style={{ fontSize: 14 }}>
                Delivery By Tomorrow, Sun |
                <span style={{ color: "green" }}> Free </span>
                <span style={{ textDecoration: "line-through" }}> ₹40</span>
              </Typography>

              <Typography className={classes.policy}>
                7 Days Replacement Policy
              </Typography>
            </Box>
          </Box>
          <Box className={classes.countDiv}>
            <Box className={classes.negBtn}>-</Box>
            <Box className={classes.number}>1</Box>
            <Box className={classes.negBtn}>+</Box>
            <Button className={classes.remButton}>Save For Later</Button>
            <Button className={classes.remButton}>Remove</Button>
          </Box>
        </Box>

        <Box className={classes.btnDiv}>
          <Button className={classes.orderBtn}>Place order</Button>
        </Box>
      </Box>
      <Box>
        <Box className={classes.mainDiv}>
          <Typography className={classes.priceTxt}>Price Details</Typography>
          <Box className={classes.priceDiv}>
            <Typography>Price(1 item)</Typography>
            <Typography>₹20,990</Typography>
          </Box>

          <Box className={classes.priceDiv}>
            <Typography>Discount</Typography>
            <Typography style={{ color: "green" }}>-₹4000</Typography>
          </Box>

          <Box className={classes.priceDiv}>
            <Typography>Delivery Charges</Typography>
            <Typography style={{ color: "green" }}>Free</Typography>
          </Box>

          <Box className={classes.priceDiv}>
            <Typography>Packeging Charges</Typography>
            <Typography>29</Typography>
          </Box>

          <Box className={classes.totalAmount}>
            <Typography className={classes.totalPrice}>
              Total Amount{" "}
            </Typography>
            <Typography className={classes.totalPrice}> ₹17,019</Typography>
          </Box>

          <Typography className={classes.save}>
            You will save ₹3,971 on this order
          </Typography>
        </Box>
        <Box className={classes.security}>
          <GppGoodIcon />
          <Typography style={{ fontSize: 14 }}>
            Safe and Secure Payments.Easy returns.100% Authentic products
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Cart;
