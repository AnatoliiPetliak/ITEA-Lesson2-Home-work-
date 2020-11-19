import React from "react";

const Row = ({ children }) => {
  return (
    <>
      {React.Children.count(children) >= 0 && (
        <>
          {React.Children.map(children, (child, i) => {
            console.log(["child-cell"], child, React.isValidElement(children));
            return child;
          })}
        </>
      )}
    </>
  );
};
Row.defaultProps = {
  head: false,
};

export default Row;
