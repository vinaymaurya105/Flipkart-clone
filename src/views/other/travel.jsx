import {
  Box,
  TextField,
  makeStyles,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import SwapHorizontalCircleIcon from "@mui/icons-material/SwapHorizontalCircle";

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
  wraper: {
    height: 120,
    background: "#fff",
    border: "1px solid #fff",
    borderRadius: 4,
    padding: 22,

    width: "80%",
    margin: " auto",
  },
  radioBtn: {
    display: "flex",
    flexDirection: "row",
    size: 10,
  },
  input: {
    border: "1px solid #e0e0e0",
    borderRadius: 5,
    "&&:before": {
      borderBottom: "1px solid #aaa8a8e1",
    },
    "&&:after": {
      borderBottom: "1px solid #2874f0",
    },
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

            <Box className={classes.wraper}>
              <Box>
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="way"
                    name="way1"
                    className={classes.radioBtn}
                  >
                    <FormControlLabel
                      value="One-Way"
                      control={<Radio />}
                      label="One Way"
                    />
                    <FormControlLabel
                      value="Round-Trip"
                      control={<Radio />}
                      label="Round Trip"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              <Box>
                <TextField variant="outlined" className={classes.input} />
                <SwapHorizontalCircleIcon style={{ color: "blue" }} />
                <TextField variant="outlined" className={classes.input} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Travel;
