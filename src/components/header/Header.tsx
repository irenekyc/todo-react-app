import React, { FunctionComponent, useState, KeyboardEvent } from "react";
import styles from "./Header.module.scss";
import Container from "../container";
import classnames from "classnames";
import { MoonIcon, SunIcon } from "../icons";
import Checkbox from "../checkbox";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import {
  THEME_DARK,
  THEME_LIGHT,
  TODO_THEME_LOCAL_STORATGE,
} from "../../constants/theme";
import { updateTheme } from "../../reducer/theme/actions";

const Header: FunctionComponent = () => {
  const [newTask, setNewTask] = useState<string>("");

  const checkEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setNewTask("");
      // ALso do something
    }
  };

  const { theme } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    if (theme === THEME_DARK) {
      dispatch(updateTheme(THEME_LIGHT));
      window.localStorage.setItem(TODO_THEME_LOCAL_STORATGE, THEME_LIGHT);
    } else {
      dispatch(updateTheme(THEME_DARK));
      window.localStorage.setItem(TODO_THEME_LOCAL_STORATGE, THEME_DARK);
    }
  };

  return (
    <div
      className={classnames(styles.header, {
        [styles.header__dark]: theme === THEME_DARK,
        [styles.header__light]: theme === THEME_LIGHT,
      })}
    >
      <Container className={styles.header__row}>
        <h1>TODO</h1>
        <button onClick={toggleTheme}>
          {theme === THEME_DARK ? (
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
