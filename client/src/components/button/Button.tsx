import React from "react";

interface IProp {
  children: React.ReactNode;
}

const Button = ({ children }: IProp) => {
  return (
    <button
      className="font-semibold leading-none px-10 py-3 rounded-full capitalize 
     text-white bg-primary-300 transition-all duration-300 hover:bg-button-hover"
    >
      {children}
    </button>
  );
};

export default Button;
