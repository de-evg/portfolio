import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "intersection-observer";
import { useIsVisible } from "react-is-visible";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import WorkList from "../work-list/work-list";

const Works = ({ updateSectionName }) => {
  const nodeRef = useRef();
  let isVisible = useIsVisible(nodeRef);
  const [isShowed, setIsShowed] = useState(false);
  useEffect(() => {
    if (!isShowed) {
      isVisible && setIsShowed(true);
      
    }
    if (isVisible) {
      updateSectionName(`WORKS`);
    }
  }, [isShowed, isVisible, setIsShowed, updateSectionName]);

  return (
    <div className="works" ref={nodeRef} style={{paddingBottom: "100px"}}>
      <div className="wrapper">
        <ul className="main-section__list works-list">
          <WorkList />
        </ul>
      </div>
    </div>
  );
};

Works.propTypes = {
  updateSectionName: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  updateSectionName(sectionName) {
    dispatch(ActionCreator.changeSection(sectionName))
  }
});

export default connect(null, mapDispatchToProps)(Works);
