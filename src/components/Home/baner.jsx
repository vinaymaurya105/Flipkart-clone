import Carousel from "react-material-ui-carousel";
import { makeStyles, Box } from "@material-ui/core";

// data
import { bannerData } from "../../Data/data";

//Styling in component using class

const useStyle = makeStyles({
  img: {
    width: "100%",
    height: 280,
    cursor: "pointer",
  },
});

function Baner() {
  const classes = useStyle();

  return (
    <Box>
      <Carousel
        autoPlay={true}
        animation="slide"
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        indicators={false}
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
        {bannerData.map((image, id) => (
          <img src={image} className={classes.img} key={id} />
        ))}
      </Carousel>
    </Box>
  );
}

export default Baner;
