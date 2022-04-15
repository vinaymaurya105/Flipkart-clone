import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/header/header";
import Home from "./components/Home/home";
import Cart from "./components/Cart/cart";
import Footer from "./components/footer/footer";
import PlusZone from "./components/header/pluszone";
import LoginPage from "./components/login/loginPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/plus" component={PlusZone} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
