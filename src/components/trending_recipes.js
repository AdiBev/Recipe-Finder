import React, { Component, Fragment } from "react";

import { RecipesTemplate } from "./recipe_template";
import { Spinner } from "./spinner";
import { API_KEY1 } from "../config/config";

export class TrendingRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trendingRecipes: false,
      error: false
    };
  }

  componentDidMount() {
    const rootURL = `https://www.food2fork.com/api/search?key=${API_KEY1}`;
    fetch(`${rootURL}&count=50&sort=t`)
      .then(response => response.json())
      .then(json => this.setState({ trendingRecipes: [json] }))
      .then(error => this.setState({ error: true }));
  }

  render() {
    const { trendingRecipes, error } = this.state;
    return (
      <Fragment>
        {!trendingRecipes ? (
          <div>
            <Spinner />
          </div>
        ) : (
          <RecipesTemplate trendingRecipes={this.state.trendingRecipes} />
        )}
        {error && (
          <div className="error">
            <p>{error}</p>
          </div>
        )}
      </Fragment>
    );
  }
}
