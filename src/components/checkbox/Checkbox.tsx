import React, { FunctionComponent } from "react";
import styles from "./Checkbox.module.scss";
import classnames from "classnames";
import CheckIcon from "../icons/CheckIcon";

interface CheckboxProps {
  active: boolean;
  className?: string;
}

const Checkbox: FunctionComponent<CheckboxProps> = ({
  active,
  className,
}: CheckboxProps) => {
  return (
    <div
      className={classnames(styles.checkbox, className, styles["dark-theme"], {
        [styles.checkbox__active]: active,
      })}
    >
      {active && <CheckIcon />}
    </div>
  );
};

Checkbox.defaultProps = {
  className: "",
};

export default Checkbox;
