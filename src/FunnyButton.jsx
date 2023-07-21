import React from 'react';
import PropTypes from 'prop-types'

const FunnyButton = ({ children }) => {
  return (
    <div>
      {/* Slot FallBack === if button content is None then render the span as below */}
      <button
      style={{
        background: "rgba(0, 0, 0, 0.4)",
        color: "#fffeee",
        padding: "10px 20px",
        margin: "8px",
        fontSize: "16px",
        border: "2px solid #fffeee",
        outline: "0",
        transform: "scale(0.9)",
        boxShadow: "4px 4px rgba(0, 0, 0, 0.4)",
        transition: "transform 0.2s cubic-bezier(0.34, 1.65. 0.88, 0.925) 0s"
      }}
      >{children || <span> No content found</span>}</button>
    </div>
  );
};

export default FunnyButton;

FunnyButton.PropTypes = {
  children: PropTypes.node
}