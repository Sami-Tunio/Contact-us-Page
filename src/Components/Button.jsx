import React from "react";

const Button = ({ child, text, className }) => {
  return (
    <>
      <button className={`${className}`}>
        {child}
        {text}
      </button>
    </>
  );
};

export default Button;
