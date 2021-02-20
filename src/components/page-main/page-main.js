import React from "react";
import PropTypes from "prop-types";
import PageHeader from "../page-header/page-header";
import SVGMenu from "../svg-menu/svg-menu";
import { connect } from "react-redux";
import { NameSpace } from "../../store/reducers/root";
import MainMenu from "../main-menu/main-menu";
import SectionList from "../section-list/section-list";
import Footer from "../footer/footer";

const PageMain = ({ isMenuOpen }) => {
  return (
    <SVGMenu />
    // <div className="body-grid">
    //   <PageHeader />
    //   <main>
    //     <SectionList />
    //     <MainMenu isShowed={isMenuOpen} />
    //   </main>
    //   <Footer />
    // </div>
  );
};

PageMain.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  currentSection: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  isMenuOpen: state[NameSpace.HEADER].isMenuOpen,
});

export default connect(mapStateToProps)(PageMain);
