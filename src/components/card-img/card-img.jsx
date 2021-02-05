import React from "react";
import PropTypes from "prop-types";
import { Transition } from "react-transition-group";

const duration = 500;
const transformDuration = 1000;
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out, transform ${transformDuration}ms ease-in-out`,
  opacity: 0,
  transform: "translateX(100%)",
};

const transitionStyles = {
  entering: { opacity: 0, transform: "translateX(100%)" },
  entered: { opacity: 1, transform: "translateX(0)" },
};

const CardImg = ({ in: inProp }) => {
  return (
    <Transition in={inProp} timeout={duration}>
      {(state) => (
        <picture style={{ ...defaultStyle, ...transitionStyles[state] }}>
          <source
            media="(min-width: 960px)"
            srcSet="./img/work-img-desctop.jpg"
          />
          <source media="(min-width: 414px)" srcSet="./img/work-img414.jpg" />
          <img
            src="./img//work-img.jpg"
            width="270"
            height="280"
            alt="Превью сайта"
          />
        </picture>
      )}
    </Transition>
  );
};

CardImg.propTypes = {
  in: PropTypes.bool.isRequired,
};

export default CardImg;
