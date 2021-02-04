import React from "react";
import PropTypes from "prop-types";
import { Transition } from "react-transition-group";

const duration = 500;
const transformDuration = 1000;
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out, transform ${transformDuration}ms ease-in-out`,
  opacity: 0
};
const transitionStyles = {
  entering: { opacity: 0, transform: "translateX(1000%)" },
  entered: { opacity: 1, transform: "translateX(0)" },
};

const Skill = ({ children, in: inProp }) => {
  return (
    <Transition in={inProp} timeout={duration}>
      {(state) => (
        <li
          style={{ ...defaultStyle, ...transitionStyles[state] }}
          className="services__skill-item"
        >
          {children}
        </li>
      )}
    </Transition>
  );
};

Skill.propTypes = {
  in: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired
}

export default Skill;
