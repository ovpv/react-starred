import React, { useState, useEffect } from "react";
import { dom, library } from "@fortawesome/fontawesome-svg-core";
import { faStar as StarFill } from "@fortawesome/free-solid-svg-icons";
import { faStar as StarOutline } from "@fortawesome/free-regular-svg-icons";
import Star from "./star";

library.add({
  StarFill,
  StarOutline
});
dom.watch();

export const toggleStarType = (index, fn, fn2) => {
  fn(index);
  fn2(index);
};

const Stars = ({ on, given, updateGiven }) => {
  const [stars, updateStars] = useState([]);
  const [isSolid] = useState(false);
  const [starsGiven, updateStarsGiven] = useState(given);
  const [starsTotal] = useState(on);

  useEffect(() => {
    let updatedStars = [];
    for (let i = 0; i < starsTotal; i++) {
      if (i < starsGiven) {
        updatedStars.push(
          <Star
            type={StarFill}
            key={i}
            onClick={() => toggleStarType(i + 1, updateStarsGiven, updateGiven)}
          />
        );
      } else {
        updatedStars.push(
          <Star
            key={i}
            index={i}
            type={isSolid ? StarFill : StarOutline}
            onClick={() => toggleStarType(i + 1, updateStarsGiven, updateGiven)}
          />
        );
      }
    }
    updateStars(updatedStars);
  }, [starsGiven, isSolid, starsTotal]);

  return <span>{stars}</span>;
};

export default Stars;
