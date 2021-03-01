import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {NameSpace} from "../../store/reducers/root";
import MainMenuItem from "../main-menu-item/main-menu-item";
import {Section} from "../../const";
import {ActionCreator} from "../../store/action";
import {Transition} from "react-transition-group";


const menuItems = [`ABOUT_ME`, `SERVICES`, `WORKS`, `CONTACTS`];
const DEFAULT_OFFSET = 0;
const PADDING = 80;

const MainMenu = ({isShowed, top, offset, changeMainMenuView}) => {
  const duration = 600;
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };
  const transitionStyles = {
    entering: {opacity: 0},
    entered: {opacity: 1},
  };

  const showClassToggle = isShowed ? "main-menu--show" : "";
  const [logoOffset, setOffset] = useState(DEFAULT_OFFSET);

  useEffect(() => {
    setOffset(top + PADDING);
  }, [top]);

  return (
    <div
      className={`main-menu ${showClassToggle}`}
      style={{backgroundPositionY: logoOffset}}
    >
      <Transition in={isShowed} timeout={duration}>
        {(state) => (
          <nav
            className={"main-menu__list"}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            {menuItems.map((item, i) => (
              <MainMenuItem
                closeMenu={changeMainMenuView}
                key={`menu-item-${i}`}
                offset={offset[item]}
              >
                {Section[item]}
              </MainMenuItem>
            ))}
          </nav>
        )}
      </Transition>
    </div>
  );
};

MainMenu.propTypes = {
  isShowed: PropTypes.bool.isRequired,
  top: PropTypes.number.isRequired,
  offset: PropTypes.object.isRequired,
  changeMainMenuView: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  top: state[NameSpace.LOGO].top,
  offset: state[NameSpace.OFFSET],
});

const mapDispatchToProps = (dispatch) => ({
  changeMainMenuView() {
    dispatch(ActionCreator.changeMainMenu());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
