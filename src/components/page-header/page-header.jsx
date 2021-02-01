import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NameSpace } from "../../store/reducers/root";
import { Section } from "../../const";
import { isMobile } from "react-device-detect";
import {ActionCreator} from "../../store/action";

const PageHeader = ({ currentSection, changeMainMenuView, top, left }) => {
  const [isShowed, setShowed] = useState(null);
  const showClassToggle = isShowed ? "header--nav-show" : "";
  let btnShowClassToggle
  if (isShowed !== null) {
    btnShowClassToggle = isShowed ? "page-nav--show" : "page-nav--hidden";
  }
  const handleClick = useCallback(() => {
    setShowed(!isShowed);
    changeMainMenuView();
  }, [setShowed, isShowed, changeMainMenuView]);
  console.log(document.documentElement.clientWidth);
  return (
    <header className={`header ${showClassToggle}`} style={{backgroundPositionY: isShowed ? `${top + 160}px` : `unset`}}>
      <div className="wrapper header__container">
        <h1 className="header__title page-title">Portfolio of Denis Minaev</h1>
        {!isMobile && (
          <h2 className="header__current-section">{Section[currentSection]}</h2>
        )}
        <button onClick={handleClick} className={`header__nav page-nav ${btnShowClassToggle}`} />        
      </div>
    </header>
  );
};

PageHeader.propTypes = {
  currentSection: PropTypes.string.isRequired,
  changeMainMenuView: PropTypes.func.isRequired,
  top: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  currentSection: state[NameSpace.HEADER].currentSection,  
  top: state[NameSpace.LOGO].top,
  left: state[NameSpace.LOGO].left,
});

const mapDispatchToProps = (dispatch) => ({
  changeMainMenuView() {
    dispatch(ActionCreator.changeMainMenu())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PageHeader);
