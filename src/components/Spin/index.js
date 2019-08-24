import React from "react";
import PropTypes from 'prop-types';
import './index.scss';

const Spin = ({ tip }) => (
  <div className="spin-loading">
    <div className="spin">
      <span className="spin-dot">
        <i className="spin-dot-item"></i>
        <i className="spin-dot-item"></i>
        <i className="spin-dot-item"></i>
        <i className="spin-dot-item"></i>
      </span>
      <div className="spin-text">{tip}</div>
    </div>
  </div>
);

Spin.propTypes = {
  tip: PropTypes.string
}
Spin.defaultProps = {
  tip: 'Loading...'
}

export default Spin;
