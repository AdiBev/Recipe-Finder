import React, { Fragment } from "react";

import { NutriFactsButton } from "./nutriFactsButton";

export const RecipesHome = () => {
  return (
    <Fragment>
      <div className="intro">
        <p>Find all your Yummy and healthy dish recipes in one place.</p>
        <p>
          {" "}
          Click <NutriFactsButton /> sign for Nutrition information.
        </p>
        <p>Enter your favourite dish or an ingredient name.</p>
      </div>
    </Fragment>
  );
};
