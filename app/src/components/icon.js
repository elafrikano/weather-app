import React from "react";

function Icon({ number = "01", large }) {
  let icon;
  try {
    icon = require(`../assets/images/${number}.svg`);
  } catch (error) {
    icon = require(`../assets/images/01.svg`);
    console.log(error);
  }
  return <img src={icon} alt="" className={large ? "icon-large" : "icon"} />;
}

export default Icon;
