import React, {useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {isMobile} from "react-device-detect";

const AboutMe = ({updateSectionName}) => {
  const nodeRef = useRef();
  return (
    <div className="about-me">
      <div className="wrapper">
        {isMobile && (
          <h2 className="main-section__title">About me</h2>
        )}
        <div className="about-me__container" ref={nodeRef}>
          <p className="main-section__content about__content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis esse quia, sapiente ea earum laboriosam excepturi
            quidem dolorum accusantium voluptate minus? Facere perferendis
            amet alias a, impedit eius ipsam voluptas.
          </p>
          <p className="main-section__content about__content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis esse quia, sapiente ea earum laboriosam excepturi
            quidem dolorum accusantium voluptate minus? Facere perferendis
            amet alias a, impedit eius ipsam voluptas.
          </p>
        </div>
      </div>
    </div>
  );
};

AboutMe.propTypes = {
  updateSectionName: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  updateSectionName(sectionName) {
    dispatch(ActionCreator.changeSection(sectionName));
  },
});

export default connect(null, mapDispatchToProps)(AboutMe);
