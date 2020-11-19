import React from "react";

const Table = ({ children }) => {
  return (
    <>
      {React.Children.count(children) >= 0 && (
        <>
          {React.Children.map(children, (child, i) => {
            console.log(["child-row"], child, React.isValidElement(children));
            return child;
          })}
        </>
      )}
    </>
  );
};

export default Table;
