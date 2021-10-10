import { Route, Switch } from "react-router";
import { Counter } from "../features/counter/Counter";
import Gallery from "../features/gallery";

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/counter">
        <Counter />
      </Route>
      <Route path="/">
        <Gallery />
      </Route>
    </Switch>
  );
};

export default AppRouter;
