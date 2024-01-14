
// MapPinIcon.tsx
import React, { FC } from 'react';

interface MapPinIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const Location: FC<MapPinIconProps> = ({ width = 16, height = 16, color = 'currentColor' }) => {
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
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
};

export default Location;