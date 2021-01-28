import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ActionCreator } from "../../store/action";
import "intersection-observer";
import { useIsVisible } from "react-is-visible";
import { connect } from "react-redux";
import { Controller, Scene } from "react-scrollmagic";

const Services = ({ updateSectionName }) => {
  const nodeRef = useRef();
  let isVisible = useIsVisible(nodeRef);
  const [isShowed, setIsShowed] = useState(false);
  useEffect(() => {
    if (!isShowed) {
      isVisible && setIsShowed(true);
    }
    if (isVisible) {
      updateSectionName(`SERVICES`);
    }
  }, [isShowed, isVisible, setIsShowed, updateSectionName]);

  return (
    <div className="services" ref={nodeRef} style={{ paddingBottom: "100px" }}>
      <div className="wrapper">
        <div className="services__container">
          <Controller>
            <Scene duration={700} pin>
              <p className="main-section__content services__content">
                services I CAN HELP YOU WITH
              </p>
            </Scene>
            <Scene duration={400} pin>
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
            </Scene>
          </Controller>
        </div>
      </div>
    </div>
  );
};

Services.propTypes = {
  updateSectionName: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  updateSectionName(sectionName) {
    dispatch(ActionCreator.changeSection(sectionName));
  },
});

export default connect(null, mapDispatchToProps)(Services);
