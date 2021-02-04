import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ActionCreator } from "../../store/action";
import { connect } from "react-redux";
import { isMobile } from "react-device-detect";

const Contacts = ({ changeCurrentSection }) => {
  const nodeRef = useRef();

  useEffect(() => {
    const scrollY =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    const elementPos = nodeRef.current.offsetTop;
    const scrollPos = scrollY + window.innerHeight;
    if (elementPos < scrollPos) {
      changeCurrentSection(`CONTACTS`);
    }
    const handleScroll = (evt) => {
      const scrollY =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      const elementPos = nodeRef.current.offsetTop + 500;
      const scrollPos = scrollY + window.innerHeight;
      if (elementPos < scrollPos) {
        changeCurrentSection(`CONTACTS`);
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [changeCurrentSection]);

  return (
    <>
      <div className="contacts" ref={nodeRef}>
        <div className="wrapper contacts__container">
          {isMobile && <h2 className="main-section__title">Contacts</h2>}
          <p className="contacts__content">Get in touch</p>
          <a className="contacts__mail" href="#">
            D.E.MIN@YANDEX.RU
          </a>
        </div>
      </div>
      <footer className="page-footer">
        <div className="wrapper page-footer__container">
          <a className="page-footer__link-to-top" href="/">
            {" "}
            Back to top{" "}
          </a>
          <p className="page-footer__year">© 2021</p>
        </div>
      </footer>
    </>
  );
};

Contacts.propTypes = {
  changeCurrentSection: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeCurrentSection(sectionName) {
    dispatch(ActionCreator.changeSection(sectionName));
  },
});

export default connect(null, mapDispatchToProps)(Contacts);
