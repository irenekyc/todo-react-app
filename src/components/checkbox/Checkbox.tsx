import React, { FunctionComponent } from "react";
import styles from "./Checkbox.module.scss";
import classnames from "classnames";
import CheckIcon from "../icons/CheckIcon";
import { THEME_DARK, THEME_LIGHT } from "../../constants/theme";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface CheckboxProps {
  active: boolean;
  className?: string;
}

const Checkbox: FunctionComponent<CheckboxProps> = ({
  active,
  className,
}: CheckboxProps) => {
  const { theme } = useSelector((state: RootState) => state.theme);
  return (
    <div
      className={classnames(styles.checkbox, className, {
        [styles.checkbox__active]: active,
        [styles.checkbox__dark]: theme === THEME_DARK,
        [styles.checkbox__light]: theme === THEME_LIGHT,
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
