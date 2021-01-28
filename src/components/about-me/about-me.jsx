import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Spring, config } from "react-spring/renderprops";
import "intersection-observer";
import { useIsVisible } from "react-is-visible";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const AboutMe = ({ updateSectionName }) => {
  const nodeRef = useRef();
  let isVisible = useIsVisible(nodeRef);
  const [isShowed, setIsShowed] = useState(false);
  useEffect(() => {
    if (!isShowed) {
      isVisible && setIsShowed(true);
      
    }
    if (isVisible) {
      updateSectionName(`ABOUT_ME`);
    }
  }, [isShowed, isVisible, setIsShowed, updateSectionName]);

  return (
    <div className="about-me" style={{paddingBottom: "100px"}}>
      <div className="wrapper">
        <div className="about-me__container" ref={nodeRef}>
          {isShowed && (
            <Spring config={config.molasses} to={{ opacity: 1, transform: "translateX(0)" }} from={{ opacity: 0, transform: "translateX(-1000px)" }} delay={700}>
              {
                props => <p style={props} className="main-section__content about__content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis esse quia, sapiente ea earum laboriosam excepturi
                quidem dolorum accusantium voluptate minus? Facere perferendis
                amet alias a, impedit eius ipsam voluptas.
              </p>
              }
              
            </Spring>
          )}
          {isShowed && (
            <Spring config={config.molasses} to={{ opacity: 1, transform: "translateX(0)" }} from={{ opacity: 0, transform: "translateX(-1000px)" }} delay={1400}>
              {
                props => <p style={props} className="main-section__content about__content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis esse quia, sapiente ea earum laboriosam excepturi
                quidem dolorum accusantium voluptate minus? Facere perferendis
                amet alias a, impedit eius ipsam voluptas.
              </p>
              }
              
            </Spring>
          )}
        </div>
      </div>
    </div>
  );
};

AboutMe.propTypes = {
  updateSectionName: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  updateSectionName(sectionName) {
    dispatch(ActionCreator.changeSection(sectionName))
  }
});

export default connect(null, mapDispatchToProps)(AboutMe);
