import React from "react";
import loading from "../images/loading.gif";

const Spinner = () => {
  return (
    <div>
      <img src={loading} alt="Loading..." />
    </div>
  );
};

export default Spinner;
