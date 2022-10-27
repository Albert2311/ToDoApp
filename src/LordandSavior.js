import React, { useEffect } from "react";
import Granim from "granim";
import "./CSS/LordandSavior.css";


const LordandSavior = ({children}) => {
  useEffect(() => {
    new Granim({
      element: "#logo-canvas",
      direction: "left-right",
      opacity: [1, 1],
      states: {
        "default-state": {
          gradients: [
            ["#cdb4db", "#ffc8dd"],
            ["#ffafcc", "#023e7d"],
            ["#a2d2ff", "#0466c8"],
            ["#023e7d", "#a2d2ff"],
            ["#0466c8", "#ffafcc"],
            ["#ffc8dd", "#cdb4db"],
          ],
          transitionSpeed: 5000,
        },
      },
    });
  }, []);

  return (
    <body>

    <div className="bloc-logo">
      <canvas id="logo-canvas" />
      <div className="logo-mask">
      {children}
      </div>
    </div>
    </body>
  );
};

export default LordandSavior;