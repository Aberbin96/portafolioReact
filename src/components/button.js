import React from "react";

function Button({ text, handler, className }) {
  return (
    <button
      onClick={() => handler()}
      className={className ? `button ${className}` : "button"}
    >
      {text}
    </button>
  );
}

export default Button;
