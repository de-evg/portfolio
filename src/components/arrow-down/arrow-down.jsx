import React, { useCallback } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const ArrowDown = ({ section, changeCurrentSection }) => {
  const handleClick = useCallback(() => {
    window.scrollTo({
      top: section.current.getBoundingClientRect().top,
      behavior: "smooth",
    });
    changeCurrentSection(section.current.id);
  }, [section, changeCurrentSection]);
  return <button className="arrow-down" onClick={handleClick}></button>;
};

ArrowDown.propTypes = {
  section: PropTypes.node.isRequired,
  changeCurrentSection: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeCurrentSection(sectionName) {
    dispatch(ActionCreator.changeSection(sectionName));
  },
});

export default connect(null, mapDispatchToProps)(ArrowDown);
