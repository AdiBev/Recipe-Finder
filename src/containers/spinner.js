import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { css } from "react-emotion";
import { PacmanLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-top: 30px;
  position: relative;
  bottom: 10px;
`;

export const Spinner = ({ loadRecipes, noRecipes }) => {
  return (
    <div>
      {loadRecipes && !noRecipes && (
        <PacmanLoader
          className={override}
          sizeUnit={"px"}
          size={20}
          color={"#ff9900"}
        />
      )}
    </div>
  );
};

Spinner.propTypes = {
  loadRecipes: PropTypes.bool.isRequired,
  noRecipes: PropTypes.bool.isRequired
};

function mapStateToProps({ loadRecipes, noRecipes }) {
  return { loadRecipes, noRecipes };
}

export default connect(mapStateToProps)(Spinner);
