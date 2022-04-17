import { navData } from "../../data/data";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

//Styling in component using class

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",

    "&& > *": {
      marginLeft: 45,
    },
  },

  wraper: {
    textAlign: "center",
    padding: 12,
    cursor: "pointer",
    textDecoration: "none",
    color: "black",
    "&:hover": {
      color: "blue",
    },
  },

  image: {
    width: 65,
  },

  text: {
    fontSize: 14,
    fontWeight: 600,
  },
}));

function Navbar() {
  const classes = useStyle();

  return (
    <Box className={classes.container}>
      {navData.map((data) => {
        const { imgUrl, url, id, text } = data;
        return (
          <Link key={id} to={url} className={classes.wraper}>
            <img src={imgUrl} alt="img" className={classes.image} />

            <Typography className={classes.text}>{text}</Typography>
          </Link>
        );
      })}
    </Box>
  );
}

export default Navbar;
