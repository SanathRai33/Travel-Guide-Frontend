import React from "react";

const Header = ({title, description}) => {
  return (
    <div className="flex flex-col justify-start items-start w-full">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default Header;
