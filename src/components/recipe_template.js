import React, { Fragment } from "react";

import { showRecipes } from "./show_recipes";
//showRecipes is a arrow function so we can use map function on it

export const RecipesTemplate = props => {
  const { recipes } = props;
  return <Fragment>{recipes && props.recipes.map(showRecipes)}</Fragment>;
};
