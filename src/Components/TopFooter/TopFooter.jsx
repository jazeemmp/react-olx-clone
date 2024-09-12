import React from "react";
import "./TopFooter.css";
const TopFooter = () => {
  return (
    <>
      <div className="topFooter">
        <div className="img-container">
          <img
            src="../../../images/phone-app.webp"
            alt=""
          />
        </div>
        <div className="textContainer">
          <h1>Try the olx app</h1>
          <p>
            Buy, sell and find just about anything using <br /> the app on your
            mobile.
          </p>
        </div>
        <div className="line"></div>
        <div className="links">
          <h3>Get your app today</h3>
          <div className="download">
            <img src="../../../images/appstore_2x.webp" alt="" />
            <img src="../../../images/playstore_2x.webp" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopFooter;
