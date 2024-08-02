import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 shadow-md rounded transform hover:scale-105 transition-transform duration-300'>
      {children}
    </button>
  );
};

export default Button;