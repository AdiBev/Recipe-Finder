import React, { Component } from "react";

import RecipeInput from "../containers/recipe_input";
import RecipesList from "../containers/recipes_list";

class App extends Component {
  render() {
    return (
      <div>
        <RecipeInput />
        <RecipesList />
      </div>
    );
  }
}

export default App;
