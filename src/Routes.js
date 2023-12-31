import { Switch, Route, Redirect } from "react-router-dom";
import DogList from "./DogList";
import FilterDogDetails from "./FilterDogDetails";

function Routes({ dogs }) {
  return (
    <Switch>
      <Route to exact path="/dogs">
        <DogList dogs={dogs} />
      </Route>
      <Route exact path="/dogs/:name">
        <FilterDogDetails dogs={dogs} />
      </Route>
      <Redirect to="/dogs" />
    </Switch>
  );
}

export default Routes;
