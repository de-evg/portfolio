import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ActionCreator } from "../../store/action";
import { isMobile } from "react-device-detect";

const AboutMe = ({ changeCurrentSection }) => {
  const nodeRef = useRef();

  useEffect(() => {
    const scrollY =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    const elementPos = nodeRef.current.offsetTop;
    const scrollPos = scrollY + window.innerHeight;

    if (elementPos < scrollPos) {
      changeCurrentSection(`ABOUT_ME`);
    }

    const handleScroll = (evt) => {
      const scrollY =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      const elementPos = nodeRef.current.offsetTop + 500;
      const scrollPos = scrollY + window.innerHeight;

      if (elementPos < scrollPos) {
        changeCurrentSection(`ABOUT_ME`);
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [changeCurrentSection]);

  return (
    <div ref={nodeRef} className="about-me">
      <div className="wrapper">
        {isMobile && <h2 className="main-section__title">About me</h2>}
        <div className="about-me__container">
          <p className="main-section__content about__content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis esse quia, sapiente ea earum laboriosam excepturi quidem
            dolorum accusantium voluptate minus? Facere perferendis amet alias
            a, impedit eius ipsam voluptas.
          </p>
          <p className="main-section__content about__content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis esse quia, sapiente ea earum laboriosam excepturi quidem
            dolorum accusantium voluptate minus? Facere perferendis amet alias
            a, impedit eius ipsam voluptas.
          </p>
        </div>
      </div>
    </div>
  );
};

AboutMe.propTypes = {
  changeCurrentSection: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeCurrentSection(sectionName) {
    dispatch(ActionCreator.changeSection(sectionName));
  },
});

export default connect(null, mapDispatchToProps)(AboutMe);
