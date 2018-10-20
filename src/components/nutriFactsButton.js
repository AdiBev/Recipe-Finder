import React, { Fragment } from "react";

export const NutriFactsButton = props => {
  return (
    <Fragment>
      {!props.showWelcomeMsg ? (
        <button type="button" className="btn btn-sm nutriFacts">
          <a href={props.shareAs} target="_blank">
            NutriFacts
          </a>
        </button>
      ) : (
        <button type="button" className="btn btn-sm nutriFacts">
          <span>NutriFacts</span>
        </button>
      )}
    </Fragment>
  );
};
