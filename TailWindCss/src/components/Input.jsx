import React from 'react';

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <div className=''>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-md py-1 px-3 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  )
}

export default Input;