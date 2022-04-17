import { Box, Typography, makeStyles } from "@material-ui/core";
import { dealData } from "../../data/data";

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

function CategoryHighlight(props) {
  const { title, data = dealData } = props;

  const classes = useStyle();
  return (
    <>
      <Typography variant="h6">{title}</Typography>
      <Box className={classes.container}>
        {data.map((node) => (
          <Box key={node.id} className={classes.wraper}>
            <img src={node.url} alt="img" />

            <Typography>{node.title.shortTitle}</Typography>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default CategoryHighlight;
