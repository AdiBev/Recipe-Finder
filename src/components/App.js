import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

import RecipeInput from "../containers/recipe_input";
import RecipesList from "../containers/recipes_list";

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={RecipeInput} />
            <Route path="/:path(recipes|error)" component={RecipesList} />
            <Route
              render={() => (
                <h4 className="text-danger text-xs-center">
                  Sorry page not found
                </h4>
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
