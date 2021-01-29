import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ActionCreator } from "../../store/action";
import "intersection-observer";
import { useIsVisible } from "react-is-visible";
import { connect } from "react-redux";
import { isMobile } from "react-device-detect";

const Contacts = ({ updateSectionName }) => {
  const nodeRef = useRef();
  let isVisible = useIsVisible(nodeRef);
  const [isShowed, setIsShowed] = useState(false);

  useEffect(() => {
    if (!isShowed) {
      isVisible && setIsShowed(true);
    }
    if (isVisible) {
      updateSectionName(`CONTACTS`);
    }
  }, [isShowed, isVisible, setIsShowed, updateSectionName]);

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
