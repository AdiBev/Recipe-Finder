import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getRecipes } from "../actions/index";
import { RecipesHome } from "../components/recipes_home";

class RecipeInput extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.getRecipes(this.state.term);
    this.setState({ term: "" });
  }

  render() {
    const { showWelcomeMsg } = this.props;
    return (
      <Fragment>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            placeholder="Enter a keyword!"
            className="form-control input-sm"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </span>
        </form>
        {!showWelcomeMsg && <RecipesHome showWelcomeMsg={showWelcomeMsg} />}
      </Fragment>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getRecipes }, dispatch);
}

export default connect(null, mapDispatchToProps)(RecipeInput);
