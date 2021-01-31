import React from "react";
import PropTypes from "prop-types";

const MainMenu = ({isShowed}) => {
  const showClassToggle = isShowed ? "main-menu--show" : null;
  return (
    <>
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
