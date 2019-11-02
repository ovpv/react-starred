import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as StarFill } from "@fortawesome/free-solid-svg-icons";

const Star = ({ type, onClick }) => {
  const [isSolid, updateStarType] = useState();
  const handleMouseEnter = () => {
    updateStarType(true);
  };
  const handleMouseLeave = () => {
    updateStarType(false);
  };
  return (
    <FontAwesomeIcon
      icon={isSolid ? StarFill : type}
      onClick={() => onClick()}
      onMouseEnter={e => handleMouseEnter()}
      onMouseLeave={e => handleMouseLeave()}
    />
  );
};

export default Star;
