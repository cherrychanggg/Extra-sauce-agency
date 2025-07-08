import React from "react";

export const ChiliIcon = ({ size = 32, color = "#FF6B6B", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 8c0-2.5 2-4.5 4.5-4.5S17 5.5 17 8m-9 7c0 6.075 4.925 11 11 11s11-4.925 11-11c0-2.5-2-4.5-4.5-4.5S20 12.5 20 15m-9 0c0-2.5 2-4.5 4.5-4.5S20 12.5 20 15" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 20c2 1.5 6 1.5 8 0" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default ChiliIcon; 