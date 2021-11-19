import React from "react";

import "../style.css";

const CardTest = () => {
  return (
    <>
      <figure className="snip1193">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample31.jpg"
          alt="sample31"
        />
        <figcaption>
          <h4>Max Conversion</h4>
          <a href="#" className="bottom-left">
            <i className="ion-ios-chatboxes-outline"></i>
          </a>
          <a href="#" className="bottom-right">
            <i className="ion-ios-telephone-outline"></i>
          </a>
        </figcaption>
      </figure>
      <figure className="snip1193 hover">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample68.jpg"
          alt="sample68"
        />
        <figcaption>
          <h4>Indigo Violet</h4>
          <a href="#" className="bottom-left">
            <i className="ion-ios-chatboxes-outline"></i>
          </a>
          <a href="#" className="bottom-right">
            <i className="ion-ios-telephone-outline"></i>
          </a>
        </figcaption>
      </figure>
      <figure className="snip1193">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample69.jpg"
          alt="sample69"
        />
        <figcaption>
          <h4>Richard Tea</h4>
          <a href="#" className="bottom-left">
            <i className="ion-ios-chatboxes-outline"></i>
          </a>
          <a href="#" className="bottom-right">
            <i className="ion-ios-telephone-outline"></i>
          </a>
        </figcaption>
      </figure>
    </>
  );
};

export default CardTest;
