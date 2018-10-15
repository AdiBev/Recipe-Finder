import React, { Fragment } from "react";

export const RecipesHome = () => {
  return (
    <Fragment>
      <div className="intro">
        <h1>YumRecipes</h1>
        <p>Find all your Yummy and healthy dish recipes in one place.</p>
        <p>
          Click{" "}
          <button type="button" className="btn btn-success btn-sm">
            <span>HealthAware</span>
          </button>{" "}
          sign for Nutrition information about your recipes.
        </p>
        <p>Enter your favourite dish or an ingredient name.</p>
      </div>
    </Fragment>
  );
};
