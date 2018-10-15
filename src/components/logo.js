import React from "react";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <div className="logo text-center">
      <Link to="/">
        <b>YUM</b>Recipes
      </Link>
    </div>
  );
};
