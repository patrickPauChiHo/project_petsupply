import React from "react";

const CustomTab = ({ title, handleTabChange, customStyle }) => {
  return (
    <div>
      <button
        onClick={handleTabChange}
        className={`border capitalize rounded-xl p-2 ${customStyle}`}
      >
        {title}
      </button>
    </div>
  );
};

export default CustomTab;
