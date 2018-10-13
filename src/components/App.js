import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import history from "../history";

import RecipeInput from "../containers/recipe_input";
import RecipesList from "../containers/recipes_list";

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Route exact path="/" component={RecipeInput} />
            <Route path="/:path(recipes|error)" component={RecipesList} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
