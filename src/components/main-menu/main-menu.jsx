import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NameSpace } from "../../store/reducers/root";
import MainMenuItem from "../main-menu-item/main-menu-item";
import { Section } from "../../const";
import {ActionCreator} from "../../store/action";

const menuItems = [`ABOUT_ME`, `SERVICES`, `WORKS`, `CONTACTS`];

const MainMenu = ({ isShowed, top, offset, changeMainMenuView }) => {
  const showClassToggle = isShowed ? "main-menu--show" : null;
  
  return (
    <div
      className={`main-menu ${showClassToggle}`}
      style={{ backgroundPositionY: top - 160 }}
    >
      <nav className={"main-menu__list"}>
        {menuItems.map((item, i) => (
          <MainMenuItem closeMenu={changeMainMenuView} key={`menu-item-${i}`} offset={offset[item]}>{Section[item]}</MainMenuItem>
        ))}        
      </nav>
    </div>
  );
};

MainMenu.propTypes = {
  isShowed: PropTypes.bool.isRequired,
  top: PropTypes.number.isRequired,
  offset: PropTypes.object.isRequired,
  changeMainMenuView: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  top: state[NameSpace.LOGO].top,
  offset: state[NameSpace.OFFSET],
});


const mapDispatchToProps = (dispatch) => ({
  changeMainMenuView() {
    dispatch(ActionCreator.changeMainMenu())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
