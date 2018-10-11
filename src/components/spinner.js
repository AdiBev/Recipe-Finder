import React from "react";

import { css } from "react-emotion";
import { PacmanLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  position: relative;
  top: 20px;
`;

export const Spinner = () => {
  return (
    <div>
      <PacmanLoader
        className={override}
        sizeUnit={"px"}
        size={25}
        color={"#fffb98"}
      />
    </div>
  );
};
