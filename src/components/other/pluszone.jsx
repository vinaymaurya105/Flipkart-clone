import { Box, makeStyles, Typography } from "@material-ui/core";
import { plusData } from "../../data/data";

const useStyle = makeStyles({
  wraper: {
    padding: "15px 0 32px 20%",

    background: "#f2f2f2",
  },
  image: {
    marginBottom: -3,
  },
  text: {
    padding: "0 25px",
    margin: "30px 0 15px 0",
    fontSize: 11,
    color: "#878787",
  },
});

function PlusZone() {
  const classes = useStyle();
  return (
    <Box>
      <Box className={classes.wraper}>
        {plusData.map((image, id) => (
          <Box key={id} className={classes.image}>
            <img src={image} alt="plusZone" />
          </Box>
        ))}
      </Box>

      <Typography className={classes.text}>Flipkart Plus +</Typography>
    </Box>
  );
}

export default PlusZone;
