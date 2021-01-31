import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ActionCreator } from "../../store/action";
import WorkList from "../work-list/work-list";
import { isMobile } from "react-device-detect";

const Works = ({ updateSectionName }) => {
  const nodeRef = useRef();
  return (
    <div className="works" ref={nodeRef} style={{ paddingBottom: "100px" }}>
      <div className="wrapper">
        {isMobile && <h2 className="main-section__title">Works</h2>}
        <ul className="main-section__list works-list">
          <WorkList />
        </ul>
      </div>
    </div>
  );
};

Works.propTypes = {
  updateSectionName: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  updateSectionName(sectionName) {
    dispatch(ActionCreator.changeSection(sectionName));
  },
});

export default connect(null, mapDispatchToProps)(Works);
