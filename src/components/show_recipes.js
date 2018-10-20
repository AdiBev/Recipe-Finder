import React from "react";

import { NutriFactsButton } from "./nutriFactsButton";

//showRecipes is just a arrow function
export const showRecipes = recipeData => {
  if (recipeData.error === "limit") {
    return (
      <div className="text-warning text-center">
        <h4>Sorry API call limit reached</h4>
      </div>
    );
  } else
    return recipeData.hits.map(recipesDetail => {
      const {
        url,
        label,
        image,
        source,
        healthLabels,
        calories,
        totalTime,
        shareAs
      } = recipesDetail.recipe;

      return (
        <div className="container template" key={shareAs}>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <a href={url} target="_blank">
                <img
                  src={image}
                  className="mx-auto d-block img-fluid img-thumbnail"
                  alt={label}
                />
                <span>
                  <h3>{label}</h3>
                </span>
              </a>
              <span>
                <div>
                  {healthLabels.map(healthLabel => {
                    return (
                      <p key={healthLabel} className="badge badge-success ml-1">
                        {healthLabel}
                      </p>
                    );
                  })}
                </div>
                <div>
                  <p>
                    {" "}
                    <NutriFactsButton shareAs={shareAs} />{" "}
                  </p>
                  <p className="badge badge-primary ml-1">
                    {recipesDetail.recipe.yield} servings
                  </p>
                  <p className="badge badge-primary ml-1">
                    {Math.floor(calories)} calories
                  </p>
                </div>
                <div>
                  <p className="badge badge-info">{totalTime} mins</p>
                </div>

                <h3>Publisher: {source}</h3>
              </span>
            </div>
          </div>
        </div>
      );
    });
};
