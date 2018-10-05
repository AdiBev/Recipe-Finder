import React, { Component } from "react";
import { connect } from "react-redux";

import { ErrorHandlerRecipes } from "../components/errorHandler_recipes";


class RecipesList extends Component {
  render() {
    return (
      <div>
        {this.props.noRecipes ? (
          <div className="container text-warning text-center mx-auto">
            Sorry no recipes found
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
