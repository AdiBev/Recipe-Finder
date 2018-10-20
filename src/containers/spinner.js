import React from "react";
import { connect } from "react-redux";

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

export const Spinner = ({ loadRecipes }) => {
  return (
    <div>
      {loadRecipes && (
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

function mapStateToProps({ loadRecipes }) {
  return { loadRecipes };
}

export default connect(mapStateToProps)(Spinner);
