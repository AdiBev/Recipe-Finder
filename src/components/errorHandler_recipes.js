import React from "react";

import { RecipesTemplate } from "./recipe_template";

export const ErrorHandlerRecipes = props => {
  return (
    <div>
      {props.error && <div className="error">{props.error}</div>}
      {props.recipes && <RecipesTemplate {...props} />}
    </div>
  );
};
