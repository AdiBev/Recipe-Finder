import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

import RecipeInput from "../containers/recipe_input";
import RecipesList from "../containers/recipes_list";
import { Logo } from "./logo";

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Logo />

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
            <div id="edamam-badge" dataColor="white" />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
