import React, { Component } from "react";

export class RecipeTemplate extends Component {
  renderRecipe = recipeData => {
    if (recipeData.error === "limit") {
      return (
        <div className="container text-warning text-center">
          Sorry API call limit reached
        </div>
      );
    } else
      return recipeData.recipes.map(recipeName => {
        const rId = recipeName.recipe_id;
        return (
          <div className="container" key={rId}>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <a href={recipeName.source_url} target="_blank">
                  <img
                    src={recipeName.image_url}
                    className="mx-auto d-block img-fluid img-thumbnail"
                    alt={recipeName.title}
                  />
                  <span>
                    <h3>{recipeName.title}</h3>
                  </span>
                </a>
                <span>
                  <h3>{recipeName.publisher}</h3>
                </span>
              </div>
            </div>
          </div>
        );
      });
  };

  render() {
    return (
      <React.Fragment>
        {this.props.recipes.map(this.renderRecipe)}
      </React.Fragment>
    );
  }
}
