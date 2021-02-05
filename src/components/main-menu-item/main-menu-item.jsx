import React, { useCallback } from "react";
import PropTypes from "prop-types";

const MainMenuItem = ({ offset, children, closeMenu }) => {
  const handleClick = useCallback(
    (evt) => {
      evt.preventDefault();
      closeMenu();
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    },
    [offset, closeMenu]
  );
  return (
    <a onClick={handleClick} className="main-menu__item" href="/">
      {children}
    </a>
  );
};

MainMenuItem.propTypes = {
  offset: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
  closeMenu: PropTypes.func.isRequired
};

export default MainMenuItem;
