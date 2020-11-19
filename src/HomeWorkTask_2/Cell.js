import React, { Component } from "react";

const Cell = ({ children, background, type, currency }) => {
  let textStyle = {};

  switch (type) {
    case "text":
      textStyle = { textAlign: "left" };
      break;
    case "date":
      textStyle = { fontStyle: "italic" };
      break;
    case "number":
      textStyle = { textAlign: "right" };
      break;
    case "money":
      textStyle = { textAlign: "right" };
      break;
    default:
      console.log("Err");
  }

  if (currency !== null) {
    children = children + currency;
  } else {
    console.log("No currency");
  }

  let styleList = { ...textStyle, background: background };
  return (
    <div className={"cell"} style={styleList}>
      {children}
    </div>
  );
};

Cell.defaultProps = {
  type: "text",
  cells: 1,
  background: "transparent",
  color: "black",
};
export default Cell;
