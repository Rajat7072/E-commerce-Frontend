import React from "react";
import loading from "../images/loading.gif";

const Notfound = () => {
  return (
    <div
      style={{
        color: "gray",
        textAlign: "center",
        marginTop: "10%",
      }}
    >
      <div>
        <h2>404</h2>
        <h4>Page Not Found</h4>
        <img src={loading} alt="Loading..." />
      </div>
    </div>
  );
};

export default Notfound;
