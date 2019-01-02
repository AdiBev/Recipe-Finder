import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

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
          <div className="text-warning text-center mt-3">
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

RecipesList.propTypes = {
  recipes: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]).isRequired,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired
};

export default connect(mapStateToProps)(RecipesList);
