import { InputBase, makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyle = makeStyles((theme) => ({
  search: {
    borderRadius: 2,
    backgroundColor: "white",
    marginLeft: 20,
    width: 520,
    height: 36,
    display: "flex",
  },

  searchIcon: {
    padding: 7,
    height: "100%",
    display: "flex",
    color: "blue",
    cursor: "pointer",
  },

  inputRoot: {
    width: "100%",
    fontSize: 14,
  },

  inputInput: {
    paddingLeft: 15,
  },
}));

function SearchBar() {
  const classes = useStyle();

  return (
    <div className={classes.search}>
      <InputBase
        placeholder="Search for products, brands and more"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />

      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
    </div>
  );
}

export default SearchBar;
