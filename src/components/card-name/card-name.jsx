import React from "react";
import PropTypes from "prop-types";
import { Transition } from "react-transition-group";

const duration = 500;
const transformDuration = 1000;
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out, transform ${transformDuration}ms ease-in-out`,
  opacity: 0,
  transform: "translateX(-100%)",
};

const transitionStyles = {
  entering: { opacity: 0, transform: "translateX(-100%)" },
  entered: { opacity: 1, transform: "translateX(0)" },
};

const CardName = ({ in: inProp }) => {
  return (
    <Transition in={inProp} timeout={duration}>
      {(state) => (
        <a
          style={{ ...defaultStyle, ...transitionStyles[state] }}
          className="works-list__item-link"
          href="#"
        >
          Battleship. The game
        </a>
      )}
    </Transition>
  );
};

CardName.propTypes = {
  in: PropTypes.bool.isRequired,
};

export default CardName;
