import React, { Component } from "react";
import { connect } from "react-redux";

import { ErrorHandlerRecipes } from "../components/errorHandler_recipes";
import { Spinner } from "../components/spinner";
import { Logo } from "../components/logo";
import RecipeInput from "./recipe_input";

class RecipesList extends Component {
  constructor(props) {
    super(props);
    this.state = { hideWelcomeMsg: true };
  }
  render() {
    const { fetchRecipes, noRecipes } = this.props;
    return (
      <div>
        <Logo />
        <RecipeInput {...this.state} />
        {fetchRecipes && !noRecipes && <Spinner />}

        {noRecipes ? (
          <div className="text-danger text-xs-center">Sorry no recipes found!</div>
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
