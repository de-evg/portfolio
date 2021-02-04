import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ActionCreator } from "../../store/action";

import { connect } from "react-redux";
import { isMobile } from "react-device-detect";
import Skill from "../skill/skill";
import {Section} from "../../const";
import {NameSpace} from "../../store/reducers/root";

const Services = ({ changeCurrentSection, currentSection }) => {
  const nodeRef = useRef();
  const [isShow, setShowStatus] = useState(false);

  useEffect(() => {
    if (Section[currentSection] === Section.SERVICES) {
      setShowStatus(true);      
    }
  }, [currentSection]);

  useEffect(() => {
    const scrollY =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    const elementPos = nodeRef.current.offsetTop;
    const scrollPos = scrollY + window.innerHeight;

    if (elementPos < scrollPos) {
      changeCurrentSection(`SERVICES`);
    }

    const handleScroll = (evt) => {
      const scrollY =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      const elementPos = nodeRef.current.offsetTop + 500;
      const scrollPos = scrollY + window.innerHeight;
      if (elementPos < scrollPos) {
        changeCurrentSection(`SERVICES`);
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [changeCurrentSection]);

  return (
    <div className="services" ref={nodeRef} style={{ paddingBottom: "100px" }}>
      <div className="wrapper">
        {isMobile && <h2 className="main-section__title">Services</h2>}
        <div className="services__container">
          <p className="main-section__content services__content">
            services I CAN HELP YOU WITH
          </p>
          <ul className="services__skill-list">
            <Skill in={isShow}>FRONTEND DEVELOPING.</Skill>
            <Skill in={isShow}>HTML.</Skill>
            <Skill in={isShow}>SCSS.</Skill>
            <Skill in={isShow}>LESS.</Skill>
            <Skill in={isShow}>WEBPACK.</Skill>
            <Skill in={isShow}>CSS.</Skill>
            <Skill in={isShow}>GULP.</Skill>
            <Skill in={isShow}>JAVA SCRIPT.</Skill>
            <Skill in={isShow}>REACT.</Skill>
            <Skill in={isShow}>REDUX.</Skill>
          </ul>
        </div>
      </div>
    </div>
  );
};

Services.propTypes = {
  changeCurrentSection: PropTypes.func.isRequired,
  currentSection: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currentSection: state[NameSpace.HEADER].currentSection,
});

const mapDispatchToProps = (dispatch) => ({
  changeCurrentSection(sectionName) {
    dispatch(ActionCreator.changeSection(sectionName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Services);
