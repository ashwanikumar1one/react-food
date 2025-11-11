import React from "react";

function Input({ type, id, label, ...props }) {
  return (
    <div className="control">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={id} required {...props} />
    </div>
  );
}

export default Input;
