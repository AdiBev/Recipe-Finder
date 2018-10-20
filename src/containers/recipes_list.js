import React, { Component } from "react";
import { connect } from "react-redux";

import { ErrorHandlerRecipes } from "../components/errorHandler_recipes";
import RecipeInput from "./recipe_input";

class RecipesList extends Component {
  state = { showWelcomeMsg: true };
  render() {
    const { noRecipes } = this.props;
    const { showWelcomeMsg } = this.state;
    return (
      <div>
        <RecipeInput showWelcomeMsg={showWelcomeMsg} />

        {noRecipes ? (
          <div className="text-warning text-center">
            Sorry no recipes found!
          </div>
        ) : (
          <ErrorHandlerRecipes {...this.props} />
        )}
      </div>
    );
  }
}

function mapStateToProps({ error, noRecipes, recipes }) {
  return { error, noRecipes, recipes };
}

export default connect(mapStateToProps)(RecipesList);
