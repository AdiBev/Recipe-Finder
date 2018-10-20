import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

import RecipeInput from "../containers/recipe_input";
import RecipesList from "../containers/recipes_list";
import Spinner from "../containers/spinner.js";
import { Logo } from "./logo";

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Logo />
            <Spinner />

            <Switch>
              <Route exact path="/" component={RecipeInput} />
              <Route path="/:path(recipes|error)" component={RecipesList} />
              <Route
                render={() => (
                  <h4 className="text-warning text-center">
                    Sorry page not found
                  </h4>
                )}
              />
            </Switch>
          </div>
        </Router>
        <div id="edamam-badge" datacolor="white" />
      </div>
    );
  }
}

export default App;
