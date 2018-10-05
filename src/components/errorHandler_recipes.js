import React from "react";

import { RenderRecipes } from "./render_recipes";

export const ErrorHandlerRecipes = props => {
  return (
    <div>
      {props.error ? (
        <div className="container text-danger text-center mx-auto">{props.error}</div>
      ) : (
        <RenderRecipes {...props}/>
      )}
    </div>
  );
};
