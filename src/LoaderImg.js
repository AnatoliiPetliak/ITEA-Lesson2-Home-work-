import React from "react";

const LoaderImg = (src) => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Image loader component</h2>
      <img src={src.src} alt="Some img" />
    </div>
  );
};
export default LoaderImg;
