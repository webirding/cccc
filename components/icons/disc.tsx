
import React, { FC } from 'react';

interface DiscIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const Disc: FC<DiscIconProps> = ({ width = 16, height = 16, color = 'currentColor' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
};

export default Disc;