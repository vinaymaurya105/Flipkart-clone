import React, { useState, useEffect } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import axios from "axios";
import { Link } from "react-router-dom";

const URL = "http://localhost:8080";

const useStyle = makeStyles({
  container: {
    display: "inline-block",

    // justifyContent: "space-around",
  },
  imageDiv: {
    textAlign: "center",
    margin: 20,
    textDecoration: "none",
    color: "black",
    float: "left",
    width: 193,
    padding: 18,
    "&:hover": {
      color: "#2874f0",
    },
  },
  img: {
    height: 200,
    width: 100,
    marginBottom: 20,
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  disc: {
    fontSize: 14,
  },
  text: {
    marginTop: 5,
    fontWeight: 600,
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
                  src={`${URL}/public/${productPictures[0].img}`}
                  alt="img"
                  className={classes.img}
                />
              </Box>
              <Box>
                <Box className={classes.disc}> {name}</Box>
                <Box className={classes.text}>₹ {price}</Box>
              </Box>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
}

export default ProductList;
