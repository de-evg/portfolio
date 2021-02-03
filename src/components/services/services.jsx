import React, {useRef, useEffect} from "react";
import PropTypes from "prop-types";
import {ActionCreator} from "../../store/action";

import {connect} from "react-redux";
import {isMobile} from "react-device-detect";

const Services = ({changeCurrentSection}) => {
  const nodeRef = useRef();

  const scrollY =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;

  useEffect(() => {
    const elementPos = nodeRef.current.getBoundingClientRect().top;
    const scrollPos = scrollY + window.innerHeight;
    if (elementPos < scrollPos) {
      changeCurrentSection(`SERVICES`);
    }
    const handleScroll = (evt) => {
      if (elementPos < scrollPos) {
        changeCurrentSection(`SERVICES`);
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [changeCurrentSection, scrollY]);

  return (
    <div className="services" ref={nodeRef} style={{paddingBottom: "100px"}}>
      <div className="wrapper">
        {isMobile && <h2 className="main-section__title">Services</h2>}
        <div className="services__container">
          <p className="main-section__content services__content">
            services I CAN HELP YOU WITH
          </p>
          <ul className="services__skill-list">
            <li className="services__skill-item">FRONTEND DEVELOPING.</li>
            <li className="services__skill-item">HTML.</li>
            <li className="services__skill-item">CSS.</li>
            <li className="services__skill-item">SCSS.</li>
            <li className="services__skill-item">LESS.</li>
            <li className="services__skill-item">WEBPACK.</li>
            <li className="services__skill-item">GULP.</li>
            <li className="services__skill-item">JAVA SCRIPT.</li>
            <li className="services__skill-item">REACT.</li>
            <li className="services__skill-item">REDUX.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Services.propTypes = {
  changeCurrentSection: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeCurrentSection(sectionName) {
    dispatch(ActionCreator.changeSection(sectionName));
  },
});

export default connect(null, mapDispatchToProps)(Services);
