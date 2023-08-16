import React from "react";

interface IProp {
  children: React.ReactNode;
}

const Icon = ({ children }: IProp) => {
  return (
    <div
      className="w-10 h-10 flex justify-center items-center text-2xl 
      rounded-full text-white bg-primary-300 cursor-pointer"
    >
      {children}
    </div>
  );
};

export default Icon;
