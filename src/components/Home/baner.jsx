import Carousel from "react-material-ui-carousel";
import { bannerData } from "../../Data/data";
import { makeStyles } from "@material-ui/core";

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
      {bannerData.map((image) => (
        <img src={image} className={classes.img} />
      ))}
    </Carousel>
  );
}

export default Baner;
