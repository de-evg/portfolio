import React, { useState, useEffect, useCallback } from "react";

const SVGMenu = () => {
  const initialState = { posX: 10, posY: 10 };
  const [pos, setX] = useState(initialState);
  const [stop, setStop] = useState(false);

  const handleMouseTranslate = useCallback(
    (event) => {
      setX({posX: event.clientX - 25, posY: event.clientY - 25});      
    },
    [setX]
  );

  useEffect(() => {
    if (stop) {
      document.removeEventListener("mousemove", handleMouseTranslate);
    } else {
      document.addEventListener("mousemove", handleMouseTranslate);
    }    

    return () => {
      document.removeEventListener("mousemove", handleMouseTranslate);
    };
  }, [handleMouseTranslate, stop]);

  const handleClick = useCallback(() => {
    setStop(!stop);
  }, [setStop, stop]);

  const { posX, posY } = pos;

  return (
    <svg   
       onClick={handleClick}
      width="1920"
      height="1920"
      viewBox="0 0  1920 1920"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="myClip">
          <rect id="rect" x={posX} y={posY} width="50" height="50" fill="rgba(0, 0, 0, 0)" />
        </clipPath>
      </defs>
      <rect id="rect1" x="0" y="0" width="1920" height="1920" />
      <use clipPath="url(#myClip)" xlinkHref="#rect1" fill="blue" />
    </svg>
  );
};

export default SVGMenu;
