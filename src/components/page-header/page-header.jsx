import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {NameSpace} from "../../store/reducers/root";
import {Section} from "../../const";

const PageHeader = ({currentSection}) => {
  return (
    <header className="header">
      <div className="wrapper header__container">
        <h1 className="header__title page-title">Portfolio of Denis Minaev</h1>
        <h2 className="header__current-section">{Section[currentSection]}</h2>
        <nav className="header__nav page-nav">
          <a className="page-nav__item" href="#">
            About me
          </a>
          <a className="page-nav__item" href="#">
            Services
          </a>
          <a className="page-nav__item" href="#">
            Works
          </a>
          <a className="page-nav__item" href="#">
            Contacts
          </a>
        </nav>
      </div>
    </header>
  );
};

PageHeader.propTypes = {
  currentSection: PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
  currentSection: state[NameSpace.HEADER].currentSection 
});

export default connect(mapStateToProps)(PageHeader);
