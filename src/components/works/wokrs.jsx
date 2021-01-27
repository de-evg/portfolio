import React from "react";
import WorkList from "../work-list/work-list";

const Works = () => {  
  return (
    <div className="works">
      <div className="wrapper">
        <h2 className="main-section__title">Works</h2>
        <ul className="main-section__list works-list">
          <WorkList />
        </ul>
      </div>
    </div>
  );
};

export default Works
