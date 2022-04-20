import React from "react";
import { Box, makeStyles } from "@material-ui/core";

import Baner from "./baner";
import Navbar from "./Navbar";
import CategoryHighlight from "./CategoryHIghlight";

import highlightsData from "data/categoriesHighlights";
import ProductList from "views/Products/ProductList";

//Styling in component using class

const useStyle = makeStyles({
  container: {
    padding: 10,
    background: "#f2f2f2",
  },
});

function Home() {
  const classes = useStyle();

  return (
    <>
      <Navbar />
      <Box className={classes.container}>
        <Baner />
      </Box>
      {/* {highlightsData.map((category) => (
        <CategoryHighlight
          key={category.id}
          title={category.title}
          // data={category.items}
        />
      ))} */}
      <ProductList />
    </>
  );
}

export default Home;
