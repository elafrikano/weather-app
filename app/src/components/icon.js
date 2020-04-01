import React from "react";

function Icon({ number = "01", large }) {
  const width = large ? 300 : 30;
  const icon = require(`../assets/images/${number}.svg`);
  return <img src={icon} style={{ width }} alt="" />;
}

export default Icon;
