import React from "react";
import PropTypes from "prop-types";
import PageHeader from "../page-header/page-header";

import { connect } from "react-redux";
import { NameSpace } from "../../store/reducers/root";
import MainMenu from "../main-menu/main-menu";
import SectionList from "../section-list/section-list";
import Footer from "../footer/footer";

const Page = ({ isMenuOpen }) => {
  return (
    <div className="body-grid">
      <PageHeader />
      <main>
        <SectionList />
        <MainMenu isShowed={isMenuOpen} />
      </main>
      <Footer />
    </div>
  );
};

Page.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  currentSection: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  isMenuOpen: state[NameSpace.HEADER].isMenuOpen,
});

export default connect(mapStateToProps)(Page);