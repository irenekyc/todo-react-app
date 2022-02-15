import React, { FunctionComponent, useState, useEffect } from "react";
import classnames from "classnames";
import styles from "./TaskList.module.scss";
import { TaskItem } from "../../typings/Task";
import ItemRow from "../item-row/ItemRow";
import Container from "../container";
import { ITEM_STATUS_ACTIVE } from "../../constants/item";
import { FILTER_ALL, FITLER_LIST } from "../../constants/filter";
import { FilterType } from "../../typings/Filter";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { THEME_DARK, THEME_LIGHT } from "../../constants/theme";
import { clearCompletedTasks } from "../../reducer/todo/actions";

const TaskList: FunctionComponent = () => {
  const [currentFilter, setCurrentFilter] = useState<FilterType>(FILTER_ALL);
  const [showFilterRow, setShowFilterRow] = useState<boolean>(false);
  const { theme } = useSelector((state: RootState) => state.theme);
  const {
    tasks: tasksList,
    number: { active: activeTasksNumber, completed: completedTasksNumber },
  } = useSelector((state: RootState) => state.todo);
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentFilter === FILTER_ALL) {
      setTasks(tasksList);
    } else {
      setTasks(
        tasksList.filter((task: TaskItem) => task.state === currentFilter)
      );
    }
  }, [currentFilter]);

  useEffect(() => {
    if (tasksList.length === 0) return;
    setTasks(tasksList);
    setShowFilterRow(activeTasksNumber !== 0 && completedTasksNumber !== 0);
  }, [tasksList, activeTasksNumber, completedTasksNumber]);

  const onClickClearCompleted = () => {
    dispatch(clearCompletedTasks());
  };

  if (tasksList.length === 0 || tasks.length === 0) return null;

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
            <ItemRow
              key={task.id}
              state={task.state}
              content={task.content}
              taskId={task.id}
            />
          ))}
          <div className={styles.taskList__settingsRow}>
            <span>{activeTasksNumber} items left</span>
            {showFilterRow && (
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
            )}

            {completedTasksNumber > 0 && (
              <button onClick={onClickClearCompleted}>Clear Completed</button>
            )}
          </div>
        </div>
      </Container>
      {showFilterRow && (
        <Container className={styles.taskList__settingsRow__outlineFilter}>
          <div className={styles.filterRow}>
            <div className={styles.filterRow__wrapper}>
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
        </Container>
      )}
    </div>
  );
};

export default TaskList;
