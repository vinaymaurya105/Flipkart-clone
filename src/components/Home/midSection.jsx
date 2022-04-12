import Carousel from "react-material-ui-carousel";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { dealData } from "../../Data/data";

const useStyle = makeStyles({
  container: {
    display: "flex",

    "&& > *": {
      marginLeft: 45,
    },
  },
  wraper: {
    textAlign: "center",
    padding: 10,
  },
  image: {},
});

function MidSection() {
  const classes = useStyle();
  return (
    <Carousel
      autoPlay={false}
      animation="slide"
      navButtonsAlwaysVisible={true}
      cycleNavigation={false}
      indicators={false}
      stopAutoPlayOnHover={false}
      navButtonsProps={{
        style: {
          background: "#ffffff",
          color: "black",
          borderRadius: 2,
          margin: 0,
          cursor: "unset",
        },
      }}
    >
      <Box className={classes.container}>
        {dealData.map((data, id) => (
          <Box key={id} className={classes.wraper}>
            <img src={data.url} alt="img" />

            <Typography>{data.title.shortTitle}</Typography>
          </Box>
        ))}
      </Box>
    </Carousel>
  );
}

export default MidSection;
