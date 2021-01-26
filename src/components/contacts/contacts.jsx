import React from "react";
import {isMobile} from "react-device-detect";

const Contacts = () => {
  const hiddenClass = isMobile ? `visually-hidden` : ``;
  return (
    <div className="contacts">
      <h2 className={`main-section__title ${hiddenClass}`}>Contacts</h2>
      <div className="wrapper contacts__container">
        <p className="contacts__content">Get in touch</p>
        <a className="contacts__mail" href="#">
          D.E.MIN@YANDEX.RU
        </a>
      </div>
    </div>
  );
};

export default Contacts;
