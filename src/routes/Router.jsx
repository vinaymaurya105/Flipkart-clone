import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "views/Home";
import Header from "components/header/Header";
import Cart from "components/Cart";
import Footer from "components/footer/Footer";
import PlusZone from "views/other/pluszone";
import LoginPage from "components/login/LoginPage";
import Travel from "views/other/travel";
import MyProfile from "views/other/MyProfile";
import ProductDescription from "views/Products/ProductDescription";
import ProductCategory from "views/other/ProductCategory";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/plus" component={PlusZone} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/category/travel" component={Travel} />
        <Route exact path="/myprofile" component={MyProfile} />
        <Route exact path="/:productId" component={ProductDescription} />
        <Route exact path="/category/:categoryId" component={ProductCategory} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
