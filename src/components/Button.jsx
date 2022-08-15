import React from 'react';

const Button = ({children, ...props}) => {
  return (
    <button
      {...props}
      className="mb-8 flex w-fit bg-teal-600 p-2 text-white rounded-md transition hover:bg-teal-700 disabled:bg-gray-300"
    >
      {children}
    </button>
  );
};

export default Button;
