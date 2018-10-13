import React, { Component, Fragment } from "react";

import { TrendingRecipes } from "./trending_recipes";

export class RecipesHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      showRecipes: false
    };
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
      showRecipes: !state.showRecipes
    }));
  }

  render() {
    const { isToggleOn, showRecipes } = this.state;
    return (
      <Fragment>
        <div className="intro">
          <h1>Recipe Finder</h1>
          <p>Find all your favourite dish recipes in one place.</p>
          <p>Enter your favourite dish or an ingredient name.</p>
          <p>Click here to get latest Trending recipes</p>
          <p>
            {isToggleOn ? (
              <button onClick={this.handleClick.bind(this)}>
                <b>Show recipes</b>
              </button>
            ) : (
              <button onClick={this.handleClick.bind(this)}>
                <b>Hide recipes</b>
              </button>
            )}
          </p>
        </div>

        {showRecipes && <TrendingRecipes />}
      </Fragment>
    );
  }
}
