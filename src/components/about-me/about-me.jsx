import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ActionCreator } from "../../store/action";
import { isMobile } from "react-device-detect";
import AboutMeContent from "../about-me-content/about-me-content";
import { NameSpace } from "../../store/reducers/root";
import { Section } from "../../const";

const AboutMe = ({ changeCurrentSection, currentSection }) => {
  const nodeRef = useRef();
  const [isShow, setShowStatus] = useState(false);

  useEffect(() => {
    if (Section[currentSection] === Section.ABOUT_ME) {
      setShowStatus(true);      
    }
  }, [currentSection]);

  useEffect(() => {
    const scrollY =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    const elementPos = nodeRef.current.offsetTop;
    const scrollPos = scrollY + window.innerHeight;

    if (elementPos < scrollPos) {
      changeCurrentSection(`ABOUT_ME`);
      setShowStatus(true);
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
        setShowStatus(true);
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
          <AboutMeContent in={isShow}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad porro et
            consectetur asperiores praesentium labore alias cum impedit atque,
            totam esse delectus laboriosam, quas natus pariatur mollitia quidem
            iure repellendus!
          </AboutMeContent>
          <AboutMeContent in={isShow}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad porro et
            consectetur asperiores praesentium labore alias cum impedit atque,
            totam esse delectus laboriosam, quas natus pariatur mollitia quidem
            iure repellendus!
          </AboutMeContent>
        </div>
      </div>
    </div>
  );
};

AboutMe.propTypes = {
  changeCurrentSection: PropTypes.func.isRequired,
  currentSection: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currentSection: state[NameSpace.HEADER].currentSection,
});

const mapDispatchToProps = (dispatch) => ({
  changeCurrentSection(sectionName) {
    dispatch(ActionCreator.changeSection(sectionName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutMe);
