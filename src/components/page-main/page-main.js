import React, {useEffect} from "react";
import PropTypes from "prop-types";
import AboutMe from "../about-me/about-me";
import PageHeader from "../page-header/page-header";
import Contacts from "../contacts/contacts";
import Logo from "../logo/logo";
import Services from "../services/services";
import Works from "../works/wokrs";
import {connect} from "react-redux";
import {NameSpace} from "../../store/reducers/root";
import MainMenu from "../main-menu/main-menu";

const PageMain = ({ isMenuOpen }) => {
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }    
  }, [isMenuOpen]);
  return (
    <>
      <div className="body-grid">
        <PageHeader />
        <main>
          <div className="main-section">
            <Logo isMenuShowed={isMenuOpen} />
          </div>

          <div className="main-section">
            <AboutMe />
          </div>

          <div className="main-section">
            <Services />
          </div>

          <div className="main-section">
            <Works />
          </div>

          <div className="main-section">
            <Contacts />
          </div>
          <MainMenu isShowed={isMenuOpen} />
        </main>
      </div>
      
    </>
  );
};

PageMain.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,  
};

const mapStateToProps = (state) => ({
  isMenuOpen: state[NameSpace.HEADER].isMenuOpen,  
});

export default connect(mapStateToProps)(PageMain);
