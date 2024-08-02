import React from 'react';

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <div className="input-container">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input"
      />
    </div>
  );
};

export default Input;