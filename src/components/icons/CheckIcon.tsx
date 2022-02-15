import React, { FunctionComponent } from "react";
import { IconProps } from "../../typings/Icon";

const CheckIcon: FunctionComponent<IconProps> = ({
  height,
  width,
  className,
  color,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 11 9"
      className={className}
    >
      <path
        fill="none"
        stroke={color}
        strokeWidth="2"
        d="M1 4.304L3.696 7l6-6"
      />
    </svg>
  );
};

CheckIcon.defaultProps = {
  height: "9",
  width: "11",
  color: "#fff",
  className: "",
};
export default CheckIcon;
