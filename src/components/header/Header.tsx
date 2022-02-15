import React, { FunctionComponent, useState, KeyboardEvent } from "react";
import styles from "./Header.module.scss";
import Container from "../container";
import classnames from "classnames";
import { MoonIcon, SunIcon } from "../icons";
import Checkbox from "../checkbox";

let theme: "dark" | "light" = "dark";

const Header: FunctionComponent = () => {
  const [newTask, setNewTask] = useState<string>("");

  const checkEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setNewTask("");
      // ALso do something
    }
  };
  return (
    <div
      className={classnames(styles.header, {
        [styles.header__dark]: theme === "dark",
        [styles.header__light]: theme === "light",
      })}
    >
      <Container className={styles.header__row}>
        <h1>TODO</h1>
        <button>
          {theme === "dark" ? (
            <SunIcon height="20" />
          ) : (
            <MoonIcon height="20" />
          )}
        </button>
      </Container>
      <Container>
        <div className={styles.header__taskInput}>
          <button>
            <Checkbox active={false} />
          </button>
          <input
            placeholder="Create a new todo..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyUp={checkEnter}
          />
        </div>
      </Container>
    </div>
  );
};

export default Header;
