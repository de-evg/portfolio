import React from "react";
import PropTypes, {string} from "prop-types";
import { Transition } from "react-transition-group";

const duration = 500;
const transformduration = 1000;
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out, transform ${transformduration}ms ease-in-out`,
  opacity: 0,
  transform: "translateX(100%)",
};

const transitionStyles = {
  entering: { opacity: 0, transform: "translateX(100%)" },
  entered: { opacity: 1, transform: "translateX(0)" },
};

const AboutMeContent = ({ children, in: inProp }) => {
  return (
    <Transition in={inProp} timeout={duration}>
      {(state) => (
        <p
          style={{ ...defaultStyle, ...transitionStyles[state] }}
          className="main-section__content about__content"
        >
          {children}
        </p>
      )}
    </Transition>
  );
};

AboutMeContent.propTypes = {
  in: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired
};

export default AboutMeContent;
