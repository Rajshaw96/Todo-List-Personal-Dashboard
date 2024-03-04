import React from "react";

const Preloader = () => {
  return (
    <>
      <div id="preloader" className="preloader">
        <div className="animation-preloader">
          <div className="spinner"></div>
          <p className="text-center ">Loading...</p>
        </div>
      </div>
    </>
  );
};

export default Preloader;
