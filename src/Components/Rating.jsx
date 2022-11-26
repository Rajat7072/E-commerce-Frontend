import React from "react";
import RatingComponent from "./RatingComponent";

const Rating = (props) => {
  let { Rating_star } = props;
  //console.log("console is", Rating_star);
  const handleRating = () => {
    return Array(Math.floor(Rating_star))
      .fill()
      .map((item, i) => <RatingComponent key={i} />);
  };
  return <div>{handleRating()}</div>;
};

export default Rating;
