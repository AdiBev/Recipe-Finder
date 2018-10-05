import React from "react";

import { RecipeTemplate } from "./recipe_template";
import { RandomRecipes } from "./recipe_random";

export const RenderRecipes = props => {
  return (
    <div>
      {props.recipes ? (
        <RecipeTemplate {...props} />
      ) : (
        <RandomRecipes />
      )}
    </div>
  );
};
