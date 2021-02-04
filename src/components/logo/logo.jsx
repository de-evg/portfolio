import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ActionCreator } from "../../store/action";
import { NameSpace } from "../../store/reducers/root";
import LogoSvg from "../logo-svg/logo-svg";


const Logo = ({
  updateSectionName,
  isMenuShowed,
  changeLogoPositionTop,
  changeLogoPositionLeft,
  top,
  left,
  changeCurrentSection
}) => {
  

  const containerRef = useRef();
  const [isShow, setShowStatus] = useState(false);

  useEffect(() => {
    const scrollY =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    const elementPos = containerRef.current.getBoundingClientRect().top;
    const scrollPos = scrollY + window.innerHeight;
    changeLogoPositionTop(elementPos);

    if (elementPos < scrollPos) {
      setShowStatus(true);
    }
  }, [changeLogoPositionTop]);

  useEffect(() => {
    const handleScroll = (evt) => {
      const scrollY =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      const elementPos = containerRef.current.offsetTop + 500;
      const scrollPos = scrollY + window.innerHeight;
      if (elementPos < scrollPos) {
        changeCurrentSection(`LOGO`);
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [changeCurrentSection]);

  return (
    <div ref={containerRef} className="logo">
      <div className="logo__img">
        <LogoSvg in={isShow} />
      </div>
    </div>
  );
};

Logo.propTypes = {
  updateSectionName: PropTypes.func.isRequired,
  isMenuShowed: PropTypes.bool.isRequired,
  changeLogoPositionTop: PropTypes.func.isRequired,
  changeLogoPositionLeft: PropTypes.func.isRequired,
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  changeCurrentSection: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  top: state[NameSpace.LOGO].top,
  left: state[NameSpace.LOGO].left,
});

const mapDispatchToProps = (dispatch) => ({
  updateSectionName(sectionName) {
    dispatch(ActionCreator.changeSection(sectionName));
  },
  changeLogoPositionTop(coord) {
    dispatch(ActionCreator.changeLogoPositionTop(coord));
  },
  changeLogoPositionLeft(coord) {
    dispatch(ActionCreator.changeLogoPositionLeft(coord));
  },
  changeCurrentSection(sectionName) {
    dispatch(ActionCreator.changeSection(sectionName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Logo);
