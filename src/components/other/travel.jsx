import {
  Box,
  Radio,
  FormLabel,
  MenuItem,
  Menu,
  TextField,
} from "@material-ui/core";

const options = [
  "Mumbai, IN",
  "Hydrabad, IN",
  "Kolkat, IN",
  "Benluru, IN",
  "New Delhi, IN",
  "Jaypur, IN",
  "Lucknow, IN",
  "Varansi, IN",
  "Ranchi, IN",
  "Pune, IN",
  "Goa, IN",
];
function Travel() {
  return (
    <Box>
      <Box>
        <Box>
          <Box>
            <Radio
              disableRipple
              color="default"
              checkedIcon={<span />}
              icon={<span />}
            />
            <h1>Hello this is travel</h1>
          </Box>
          <TextField />
          {/* <Menu>
            {options.map((option) => {
              <MenuItem>{option}</MenuItem>;
            })}
          </Menu> */}
        </Box>
      </Box>
    </Box>
  );
}

export default Travel;
