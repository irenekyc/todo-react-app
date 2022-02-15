import React, { FunctionComponent } from "react";
import { IconProps } from "../../typings/Icon";

const CloseIcon: FunctionComponent<IconProps> = ({
  width,
  height,
  color,
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18 18"
      className={className}
    >
      <path
        fill={color}
        fill-rule="evenodd"
        d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
      />
    </svg>
  );
};

CloseIcon.defaultProps = {
  width: "18",
  height: "18",
  color: "#494C6B",
  className: "",
};

export default CloseIcon;
