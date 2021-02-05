import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ActionCreator } from "../../store/action";

import { connect } from "react-redux";
import { isMobile } from "react-device-detect";
import Skill from "../skill/skill";
import { Section } from "../../const";
import { NameSpace } from "../../store/reducers/root";

const skills = [
  `FRONTEND DEVELOPING.`,
  `JAVA SCRIPT.`,
  `REACT.`,
  `REDUX.`,
  `HTML5.`,
  `CSS3.`,
  `WEBPACK.`,
  `SASS.`,
  `LESS.`,
  `GULP.`,
];

const Services = ({ changeCurrentSection, currentSection, setOffset }) => {
  const nodeRef = useRef();
  const [isShow, setShowStatus] = useState(false);

  useEffect(() => {
    const elementPos = nodeRef.current.offsetTop - 50;
    setOffset({ SERVICES: elementPos });
  }, [setOffset]);

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
            {skills.map((skill, i) => (
              <Skill key={`skill-${i}`} k={i + 1} in={isShow}>
                {skill}
              </Skill>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

Services.propTypes = {
  changeCurrentSection: PropTypes.func.isRequired,
  currentSection: PropTypes.string.isRequired,
  setOffset: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentSection: state[NameSpace.HEADER].currentSection,
});

const mapDispatchToProps = (dispatch) => ({
  changeCurrentSection(sectionName) {
    dispatch(ActionCreator.changeSection(sectionName));
  },
  setOffset(offset) {
    dispatch(ActionCreator.setOffset(offset));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Services);
