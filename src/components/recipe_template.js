import React, { Component, Fragment } from "react";

export class RecipesTemplate extends Component {
  renderRecipe = recipeData => {
    if (recipeData.error === "limit") {
      return (
        <div className="text-danger text-xs-center">
          <h4>Sorry API call limit reached</h4>
        </div>
      );
    } else
      return recipeData.recipes.map(recipeName => {
        const {
          recipe_id,
          source_url,
          image_url,
          title,
          publisher,
          social_rank
        } = recipeName;
        return (
          <div className="container template" key={recipe_id}>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <a href={source_url} target="_blank">
                  <img
                    src={image_url}
                    className="mx-auto d-block img-fluid img-thumbnail"
                    alt={title}
                  />
                  <span>
                    <h3>{title}</h3>
                  </span>
                </a>
                <span>
                  <h3>Publisher: {publisher}</h3>
                  <h3>Rank: {Math.floor(social_rank)}</h3>
                </span>
              </div>
            </div>
          </div>
        );
      });
  };

  render() {
    return (
      <Fragment>
        {this.props.recipes
          ? this.props.recipes.map(this.renderRecipe)
          : this.props.trendingRecipes.map(this.renderRecipe)}
      </Fragment>
    );
  }
}
