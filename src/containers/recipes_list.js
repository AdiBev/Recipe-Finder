import React, { Component } from "react";
import { connect } from "react-redux";

import { ErrorHandlerRecipes } from "../components/errorHandler_recipes";
import { Spinner } from "../components/spinner";

class RecipesList extends Component {
  render() {
    const { fetchRecipes, noRecipes } = this.props;
    return (
      <div>
        {fetchRecipes && !noRecipes && <Spinner />}

        {noRecipes ? (
          <div className="error">Sorry no recipes found!</div>
        ) : (
          <ErrorHandlerRecipes {...this.props} />
        )}
      </div>
    );
  }
}

function mapStateToProps({ error, noRecipes, recipes, fetchRecipes }) {
  return { error, noRecipes, recipes, fetchRecipes };
}

export default connect(mapStateToProps)(RecipesList);
