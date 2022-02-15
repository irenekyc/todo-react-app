import React, { FunctionComponent, ReactNode } from "react";
import styles from "./Container.module.scss";
import classnames from "classnames";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: FunctionComponent<ContainerProps> = ({
  children,
  className,
  ...props
}: ContainerProps) => {
  return (
    <div className={classnames(styles.container, className)} {...props}>
      {children}
    </div>
  );
};

Container.defaultProps = {
  className: "",
};

export default Container;
