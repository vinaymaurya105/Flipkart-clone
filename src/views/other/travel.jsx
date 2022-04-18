import { Box, TextField, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  container: {
    backgroundImage: `url(${"https://rukminim2.flixcart.com/www/1000/500/promos/06/01/2021/276bd352-f8b3-49cf-87e9-c853e6dbd5ac.jpg?q=50"})`,
    height: 610,
    backgroundRepeat: "no-repeat",
    backgroundSize: "1350px 1335px",
    display: "flex",
    justifyContent: "center",
    margin: "60px 8px 8px 8px ",
  },
  input: {
    height: 120,
    background: "#fff",
    border: "1px solid #fff",
    borderRadius: 4,
    padding: 24,
    display: "flex",
    width: "80%",
    margin: " auto",
  },
});
// const options = [
//   "Mumbai, IN",
//   "Hydrabad, IN",
//   "Kolkat, IN",
//   "Benluru, IN",
//   "New Delhi, IN",
//   "Jaypur, IN",
//   "Lucknow, IN",
//   "Varansi, IN",
//   "Ranchi, IN",
//   "Pune, IN",
//   "Goa, IN",
// ];
function Travel() {
  const classes = useStyle();
  return (
    <Box>
      <Box>
        <Box>
          <Box className={classes.container}>
            {/* <h1>Hello this is travel</h1> */}
            <Box className={classes.input}>
              <TextField />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Travel;
