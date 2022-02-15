import React, { FunctionComponent, useState, useEffect } from "react";
import classnames from "classnames";
import styles from "./TaskList.module.scss";
import { TaskItem } from "../../typings/Task";
import ItemRow from "../item-row/ItemRow";
import Container from "../container";
import {
  ITEM__STATUS_COMPLETED,
  ITEM_STATUS_ACTIVE,
} from "../../constants/item";
import { FILTER_ALL, FITLER_LIST } from "../../constants/filter";
import { FilterType } from "../../typings/Filter";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { THEME_DARK, THEME_LIGHT } from "../../constants/theme";
const tasksList: TaskItem[] = [
  {
    id: "abx-1",
    state: ITEM__STATUS_COMPLETED,
    content: "Complete online Javscript course",
  },
  {
    id: "abx-2",
    state: "active",
    content: "Jog around the park 3x",
  },
  {
    id: "abx-3",
    state: "active",
    content: "10 minutes meditation",
  },
  {
    id: "abx-4",
    state: "active",
    content: "Read for 1 hour",
  },
  { id: "abx-5", state: "active", content: "Pick up groceries" },
  {
    id: "abx-6",
    state: "active",
    content: "Complete Todo App on Frontend Mentor",
  },
];

const TaskList: FunctionComponent = () => {
  const [currentFilter, setCurrentFilter] = useState<FilterType>(FILTER_ALL);
  const [tasks, setTasks] = useState<TaskItem[]>(tasksList);
  const { theme } = useSelector((state: RootState) => state.theme);
  useEffect(() => {
    if (currentFilter === FILTER_ALL) {
      setTasks(tasksList);
    } else {
      setTasks(
        tasksList.filter((task: TaskItem) => task.state === currentFilter)
      );
    }
  }, [currentFilter]);

  return (
    <div
      className={classnames({
        [styles.darkTheme]: theme === THEME_DARK,
        [styles.lightTheme]: theme === THEME_LIGHT,
      })}
    >
      <Container>
        <div className={styles.taskList}>
          {tasks.map((task: TaskItem) => (
            <ItemRow key={task.id} state={task.state} content={task.content} />
          ))}
          <div className={styles.taskList__settingsRow}>
            <span>
              {
                tasks.filter(
                  (task: TaskItem) => task.state === ITEM_STATUS_ACTIVE
                ).length
              }{" "}
              items left
            </span>
            <div className={styles.taskList__settingsRow__inlineFilter}>
              <div className={styles.filterRow}>
                {FITLER_LIST.map((filter: FilterType) => (
                  <button
                    key={filter}
                    className={classnames(styles.filterRow__button, {
                      [styles.filterRow__button__active]:
                        currentFilter === filter,
                    })}
                    onClick={() => setCurrentFilter(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <button>Clear Completed</button>
          </div>
        </div>
      </Container>
      <Container className={styles.taskList__settingsRow__outlineFilter}>
        <div className={styles.filterRow}>
          <div className={styles.filterRow__wrapper}>
            {FITLER_LIST.map((filter: FilterType) => (
              <button
                key={filter}
                className={classnames(styles.filterRow__button, {
                  [styles.filterRow__button__active]: currentFilter === filter,
                })}
                onClick={() => setCurrentFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TaskList;
