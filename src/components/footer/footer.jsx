import React, { useCallback } from "react";
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const Footer = ({resetTitleInHeader}) => {
  const handleClick = useCallback((evt) => {
    evt.preventDefault();
    resetTitleInHeader();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [resetTitleInHeader]);

  return (
    <footer className="page-footer">
      <div className="wrapper page-footer__container">
        <a onClick={handleClick} className="page-footer__link-to-top" href="/">
          {" "}
          Back to top{" "}
        </a>
        <p className="page-footer__year">© 2021</p>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  resetTitleInHeader: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  resetTitleInHeader() {
    dispatch(ActionCreator.resetSection())
  }
})

export default connect(null, mapDispatchToProps)(Footer);
