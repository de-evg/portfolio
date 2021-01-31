import React from "react";
import PropTypes from "prop-types";

const MainMenu = ({isShowed}) => {
  const showClassToggle = isShowed ? "main-menu--show" : null;
  return (
    <>
      {isShowed && <svg className="main-menu__bg" style={{position: "fixed", top: 0, zIndex: 0, backgroundColor: "000000"}} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <path fill="#000" d="H 100% V 100% H -100% V -100%" />
      </svg>}
      <nav
        className={`main-menu ${showClassToggle}`}
      >
        <a className="main-menu__item" href="#">
          About me
      </a>
        <a className="main-menu__item" href="#">
          Services
      </a>
        <a className="main-menu__item" href="#">
          Works
      </a>
        <a className="main-menu__item" href="#">
          Contacts
      </a>
      </nav>
    </>
  );
};

MainMenu.propTypes = {
  isShowed: PropTypes.bool.isRequired
};

export default MainMenu;
