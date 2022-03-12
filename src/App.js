import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/header/header";
import Home from "./components/Home/home";
import Cart from "./components/Cart/cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
