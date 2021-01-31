import React, {useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const Logo = ({updateSectionName, isMenuShowed, changeLogoPosition}) => {
  const nodeRef = useRef();

  const svgStroke = isMenuShowed ? "#595959": "#1E1E1E";
  const svgFill = isMenuShowed ? "": "#1E1E1E";
  useEffect(()=> {
    const domRect = nodeRef.current.getBoundingClientRect();
    const {top, left} = domRect;
    changeLogoPosition({top, left});
  })
  return (
    <div className="logo--arrow-down logo">
      <div className="logo__img" >
        <svg
          ref={nodeRef}
          style={{zIndex: isMenuShowed ? 2 : "unset"}}
          width="1931"
          height="346"
          viewBox="0 0 414 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 59.5984H25.3354C43.58 59.5984 56.0884 48.5141 56.0884 31.4859C56.0884 14.4578 43.58 3.37349 25.3354 3.37349H0V59.5984ZM12.9067 48.9157V14.0562H24.698C35.7723 14.0562 43.0223 20.7229 43.0223 31.4859C43.0223 42.249 35.7723 48.9157 24.698 48.9157H12.9067Z"
            stroke={svgStroke}
            fill={svgFill}
          />
          <path
            d="M106.534 38.1526C106.534 24.257 96.8139 15.743 84.2259 15.743C71.1599 15.743 61.3603 25.0602 61.3603 37.992C61.3603 50.8434 71.0005 60.241 85.8193 60.241C93.5474 60.241 99.5227 57.8313 103.506 53.253L96.8936 46.0241C93.9457 48.8353 90.6792 50.2008 86.138 50.2008C79.605 50.2008 75.0637 46.9076 73.8687 41.5261H106.295C106.374 40.4819 106.534 39.1165 106.534 38.1526ZM84.3056 25.2209C89.8825 25.2209 93.9457 28.755 94.8221 34.2169H73.7093C74.5857 28.6747 78.6489 25.2209 84.3056 25.2209Z"
            stroke={svgStroke}
            fill={svgFill}
          />
          <path
            d="M144.226 16.3855L131.956 45.7831L120.085 16.3855H107.258L125.264 59.5984H138.091L156.176 16.3855H144.226Z"
            stroke={svgStroke}
            fill={svgFill}
          />
          <path
            d="M201.669 38.1526C201.669 24.257 191.949 15.743 179.361 15.743C166.295 15.743 156.496 25.0602 156.496 37.992C156.496 50.8434 166.136 60.241 180.955 60.241C188.683 60.241 194.658 57.8313 198.641 53.253L192.029 46.0241C189.081 48.8353 185.814 50.2008 181.273 50.2008C174.74 50.2008 170.199 46.9076 169.004 41.5261H201.43C201.51 40.4819 201.669 39.1165 201.669 38.1526ZM179.441 25.2209C185.018 25.2209 189.081 28.755 189.957 34.2169H168.845C169.721 28.6747 173.784 25.2209 179.441 25.2209Z"
            stroke={svgStroke}
            fill={svgFill}
          />
          <path
            d="M209.545 59.5984H221.974V0H209.545V59.5984Z"
            stroke={svgStroke}
            fill={svgFill}
          />
          <path
            d="M253.506 60.241C267.13 60.241 277.009 51.004 277.009 37.992C277.009 24.9799 267.13 15.743 253.506 15.743C239.882 15.743 229.924 24.9799 229.924 37.992C229.924 51.004 239.882 60.241 253.506 60.241ZM253.506 49.9598C247.292 49.9598 242.512 45.4618 242.512 37.992C242.512 30.5221 247.292 26.0241 253.506 26.0241C259.72 26.0241 264.421 30.5221 264.421 37.992C264.421 45.4618 259.72 49.9598 253.506 49.9598Z"
            stroke={svgStroke}
            fill={svgFill}
          />
          <path
            d="M310.254 15.743C304.517 15.743 299.896 17.5904 296.789 21.3655V16.3855H284.918V75.1807H297.347V55.0201C300.534 58.5542 304.916 60.241 310.254 60.241C322.284 60.241 331.605 51.5663 331.605 37.992C331.605 24.4177 322.284 15.743 310.254 15.743ZM308.103 49.9598C301.888 49.9598 297.188 45.4618 297.188 37.992C297.188 30.5221 301.888 26.0241 308.103 26.0241C314.317 26.0241 319.017 30.5221 319.017 37.992C319.017 45.4618 314.317 49.9598 308.103 49.9598Z"
            stroke={svgStroke}
            fill={svgFill}
          />
          <path
            d="M381.514 38.1526C381.514 24.257 371.794 15.743 359.206 15.743C346.14 15.743 336.34 25.0602 336.34 37.992C336.34 50.8434 345.98 60.241 360.799 60.241C368.527 60.241 374.503 57.8313 378.486 53.253L371.874 46.0241C368.926 48.8353 365.659 50.2008 361.118 50.2008C354.585 50.2008 350.044 46.9076 348.849 41.5261H381.275C381.354 40.4819 381.514 39.1165 381.514 38.1526ZM359.285 25.2209C364.862 25.2209 368.926 28.755 369.802 34.2169H348.689C349.566 28.6747 353.629 25.2209 359.285 25.2209Z"
            stroke={svgStroke}
            fill={svgFill}
          />
          <path
            d="M401.261 22.0884V16.3855H389.39V59.5984H401.819V39.1968C401.819 30.9237 406.36 27.1486 413.212 27.1486C414.168 27.1486 414.964 27.2289 416 27.3092V15.743C409.387 15.743 404.288 17.9116 401.261 22.0884Z"
            stroke={svgStroke}
            fill={svgFill}
          />
        </svg>
      </div>
    </div>
  );
};

Logo.propTypes = {
  updateSectionName: PropTypes.func.isRequired,
  isMenuShowed: PropTypes.bool.isRequired,
  changeLogoPosition: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  updateSectionName(sectionName) {
    dispatch(ActionCreator.changeSection(sectionName))
  },
  changeLogoPosition(coord) {
    dispatch(ActionCreator.changeLogoPosition(coord))
  }
});

export default connect(null, mapDispatchToProps)(Logo);
