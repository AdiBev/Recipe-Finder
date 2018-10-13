import React from "react";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <div className="logo text-xs-center">
      <Link to="/">Recipe Finder</Link>
    </div>
  );
};
