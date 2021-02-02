import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NameSpace } from "../../store/reducers/root";

const MainMenu = ({ isShowed, top }) => {
  const showClassToggle = isShowed ? "main-menu--show" : null;
  return (
    <div
      className={`main-menu ${showClassToggle}`}
      style={{ backgroundPositionY: top - 160 }}
    >
      <nav className={"main-menu__list"}>
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
    </div>
  );
};

MainMenu.propTypes = {
  isShowed: PropTypes.bool.isRequired,
  top: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  top: state[NameSpace.LOGO].top,
});

export default connect(mapStateToProps)(MainMenu);
