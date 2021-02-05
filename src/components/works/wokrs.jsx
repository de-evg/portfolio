import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ActionCreator } from "../../store/action";
import WorkList from "../work-list/work-list";
import { isMobile } from "react-device-detect";

const Works = ({ changeCurrentSection, setOffset }) => {
  const nodeRef = useRef();

  useEffect(() => {
    const elementPos = nodeRef.current.offsetTop;
    setOffset({ WORKS: elementPos });
  }, [setOffset]);

  useEffect(() => {
    const scrollY =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    const elementPos = nodeRef.current.offsetTop;
    const scrollPos = scrollY + window.innerHeight;
    if (elementPos < scrollPos) {
      changeCurrentSection(`WORKS`);
    }

    const handleScroll = (evt) => {
      const scrollY =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      const elementPos = nodeRef.current.offsetTop + 500;
      const scrollPos = scrollY + window.innerHeight;
      if (elementPos < scrollPos) {
        changeCurrentSection(`WORKS`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [changeCurrentSection]);

  return (
    <div className="works" ref={nodeRef} style={{ paddingBottom: "100px" }}>
      <div className="wrapper">
        {isMobile && <h2 className="main-section__title">Works</h2>}
        <ul className="main-section__list works-list">
          <WorkList />
        </ul>
      </div>
    </div>
  );
};

Works.propTypes = {
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

export default connect(null, mapDispatchToProps)(Works);
