import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import PageHeader from "../page-header/page-header";

import { connect } from "react-redux";
import { NameSpace } from "../../store/reducers/root";
import MainMenu from "../main-menu/main-menu";
import SectionList from "../section-list/section-list";

const PageMain = ({ isMenuOpen, currentSection }) => {

  return (
    <div className="body-grid">
      <PageHeader />
      <main>
        <SectionList />
        <MainMenu isShowed={isMenuOpen} />        
      </main>
    </div>
  );
};

PageMain.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  currentSection: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  isMenuOpen: state[NameSpace.HEADER].isMenuOpen,
  currentSection: state[NameSpace.HEADER].currentSection,
});

export default connect(mapStateToProps)(PageMain);
