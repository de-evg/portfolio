import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ActionCreator } from "../../store/action";
import { connect } from "react-redux";
import { isMobile } from "react-device-detect";

const Contacts = ({ updateSectionName }) => {
  const nodeRef = useRef();
  console.log(document.documentElement.clientWidth, Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  ));
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
  updateSectionName: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  updateSectionName(sectionName) {
    dispatch(ActionCreator.changeSection(sectionName));
  },
});

export default connect(null, mapDispatchToProps)(Contacts);
