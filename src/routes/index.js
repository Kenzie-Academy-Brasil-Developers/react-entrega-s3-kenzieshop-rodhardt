import { Switch, Route } from "react-router-dom";

import Shop from "../pages/shop";
import Cart from "../pages/cart";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Shop />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
    </Switch>
  );
};

export default Routes;
