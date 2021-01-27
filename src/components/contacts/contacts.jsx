import React from "react";
import { isMobile } from "react-device-detect";

const Contacts = () => {
  const hiddenClass = isMobile ? `visually-hidden` : ``;
  return (
    <>
      <div className="contacts">
        <h2 className={`main-section__title ${hiddenClass}`}>Contacts</h2>
        <div className="wrapper contacts__container">
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

export default Contacts;
