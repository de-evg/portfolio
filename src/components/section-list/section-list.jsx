import React, { useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import AboutMe from "../about-me/about-me";
import Contacts from "../contacts/contacts";
import Logo from "../logo/logo";
import Services from "../services/services";
import Works from "../works/wokrs";
import { NameSpace } from "../../store/reducers/root";
import ArrowDown from "../arrow-down/arrow-down";
import { NextSection } from "../../const";

const SectionList = ({ isMenuOpen, currentSection }) => {
  const mapRef = {    
    ABOUT_ME: useRef(),
    SERVICES: useRef(),
    WORKS: useRef(),
    CONTACATS: useRef(),
  };
  console.log(NextSection[currentSection || `LOGO`]);
  return (
    <>
      <div id={`LOGO`} className="main-section">
        <Logo isMenuShowed={isMenuOpen} />
      </div>

      <div ref={mapRef.ABOUT_ME} id={`ABOUT_ME`} className="main-section">
        <AboutMe />
      </div>

      <div ref={mapRef.SERVICES} id={`SERVICES`} className="main-section">
        <Services />
      </div>

      <div ref={mapRef.WORKS} id={`WORKS`} className="main-section">
        <Works />
      </div>

      <div ref={mapRef.CONTACATS} id={`CONTACATS`} className="main-section">
        <Contacts />
      </div>
      <ArrowDown section={mapRef[NextSection[currentSection || `LOGO`]]} />
    </>
  );
};

SectionList.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  currentSection: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  isMenuOpen: state[NameSpace.HEADER].isMenuOpen,
  currentSection: state[NameSpace.HEADER].currentSection,
});

export default connect(mapStateToProps)(SectionList);
