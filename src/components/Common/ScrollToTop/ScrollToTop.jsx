import { FaArrowUp } from "react-icons/fa";

import React from "react";

const ScrollToTop = () => {
  // Get the button
  let mybutton = document.getElementById("top-btn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 150 ||
      document.documentElement.scrollTop > 150
    ) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
  }
  return (
    <div
      className="top-btn"
      id="top-btn"
      onClick={() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }}
    >
      <FaArrowUp className="blue top"  />
    </div>
  );
};

export default ScrollToTop;
