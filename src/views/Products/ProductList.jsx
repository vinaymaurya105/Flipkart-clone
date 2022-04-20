import React, { useState, useEffect } from "react";
import { Box, makeStyles } from "@material-ui/core";
import axios from "axios";
import { Link } from "react-router-dom";
const URL = "http://localhost:8080";

const useStyle = makeStyles({
  container: {
    display: "flex",
    justifyContent: "space-around",
  },
  imageDiv: {
    width: 200,
    textAlign: "center",
    margin: 20,
    textDecoration: "none",
    color: "black",
  },
  img: {
    height: 220,
    width: 110,
    marginBottom: 20,
  },
});

function ProductList() {
  const classes = useStyle();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/api/products`)
      .then((res) => {
        console.log(res.data[0].productPictures[0].img);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Box>
      <Box className={classes.container}>
        {product.map((items) => {
          const { _id, productPictures, name, price, slug } = items;
          return (
            <Link
              to={`/${slug}/${_id}/p`}
              key={_id}
              className={classes.imageDiv}
            >
              <Box>
                <img
                  src="https://rukminim2.flixcart.com/image/312/312/jsdj8nk0/mobile/5/y/g/samsung-galaxy-s10-sm-g973fzwgins-original-imafdys4hrndgfzm.jpeg?q=70"
                  alt="img"
                  className={classes.img}
                />
              </Box>
              <Box>
                <Box> {name}</Box>
                <Box>{price}</Box>
              </Box>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
}

export default ProductList;
