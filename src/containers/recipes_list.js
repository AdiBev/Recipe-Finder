import React, { Component } from "react";
import { connect } from "react-redux";

import { ErrorHandlerRecipes } from "../components/errorHandler_recipes";
import { Spinner } from "../components/spinner";
import RecipeInput from "./recipe_input";

class RecipesList extends Component {
  state = { showWelcomeMsg: true };
  render() {
    const { loadRecipes, noRecipes } = this.props;
    const { showWelcomeMsg } = this.state;
    return (
      <div>
        <RecipeInput showWelcomeMsg={showWelcomeMsg} />
        {loadRecipes && !noRecipes && <Spinner />}

        {noRecipes ? (
          <div className="text-danger text-center">Sorry no recipes found!</div>
        ) : (
          <ErrorHandlerRecipes {...this.props} />
        )}
      </div>
    );
  }
}

function mapStateToProps({ error, noRecipes, recipes, loadRecipes }) {
  return { error, noRecipes, recipes, loadRecipes };
}

export default connect(mapStateToProps)(RecipesList);
