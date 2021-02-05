import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ActionCreator } from "../../store/action";
import { connect } from "react-redux";
import { isMobile } from "react-device-detect";

const Contacts = ({ changeCurrentSection, setOffset }) => {
  const nodeRef = useRef();

  useEffect(() => {
    const elementPos = nodeRef.current.offsetTop;
    setOffset({ CONTACTS: elementPos });
  }, [setOffset]);

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    </>
  );
};

Contacts.propTypes = {
  changeCurrentSection: PropTypes.func.isRequired,
  setOffset: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeCurrentSection(sectionName) {
    dispatch(ActionCreator.changeSection(sectionName));
  },
  setOffset(offset) {
    dispatch(ActionCreator.setOffset(offset));
  },
});

export default connect(null, mapDispatchToProps)(Contacts);
