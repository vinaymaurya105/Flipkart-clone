import { useEffect, useState } from "react";

import { Box, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

import axios from "axios";

const URL = "http://localhost:8080";

const useStyle = makeStyles({
  container: {
    display: "inline-block",
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

function ProductCategory(props) {
  const [product, setProduct] = useState([]);

  const classes = useStyle();

  useEffect(() => {
    const { categoryId } = props.match.params;
    axios
      .get(`${URL}/api/category/${categoryId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.match.params]);

  return (
    <>
      <Box className={classes.container}>
        {product.map((items) => {
          const { _id, productPictures, name, price } = items;

          return (
            <Link key={_id} to={`/${_id}`} className={classes.imageDiv}>
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
    </>
  );
}

export default ProductCategory;
