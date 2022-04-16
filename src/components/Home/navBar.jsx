import { navData } from "../../Data/data";
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
        const { url, id, text } = data;
        if (id === 8) {
          return (
            <Link to="/travel" className={classes.wraper} key={id}>
              <img src={url} alt="img" className={classes.image} />

              <Typography className={classes.text}>{text}</Typography>
            </Link>
          );
        }
        return (
          <Box className={classes.wraper} key={id}>
            <img src={url} alt="img" className={classes.image} />

            <Typography className={classes.text}>{text}</Typography>
          </Box>
        );
      })}
    </Box>
  );
}

export default Navbar;
