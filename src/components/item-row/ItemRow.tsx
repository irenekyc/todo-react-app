import React, { FunctionComponent } from "react";
import {
  ITEM_STATUS_ACTIVE,
  ITEM__STATUS_COMPLETED,
} from "../../constants/item";
import styles from "./ItemRow.module.scss";
import Checkbox from "../checkbox";
import { CloseIcon } from "../icons";
import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { THEME_DARK, THEME_LIGHT } from "../../constants/theme";
import { deleteTask, markTaskCompleted } from "../../reducer/todo/actions";

interface ItemRowProps {
  state: typeof ITEM_STATUS_ACTIVE | typeof ITEM__STATUS_COMPLETED;
  content: string;
  taskId: string;
}

const ItemRow: FunctionComponent<ItemRowProps> = ({
  state,
  content,
  taskId,
}) => {
  const { theme } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  const onClickDeleteTask = () => {
    dispatch(deleteTask(taskId));
  };

  const onClickCheckbox = () => {
    if (state === ITEM__STATUS_COMPLETED) {
      // dispatch(markTaskIncomplete(taskId))
    } else {
      dispatch(markTaskCompleted(taskId));
    }
  };
  return (
    <div
      className={classnames(styles.itemRow, {
        [styles.itemRow__dark]: theme === THEME_DARK,
        [styles.itemRow__light]: theme === THEME_LIGHT,
      })}
    >
      <button onClick={onClickCheckbox}>
        <Checkbox active={state === ITEM__STATUS_COMPLETED} />
      </button>
      <span
        className={classnames({
          [styles.cross]: state === ITEM__STATUS_COMPLETED,
        })}
      >
        {content}
      </span>
      <button
        className={styles.itemRow__deleteButton}
        onClick={onClickDeleteTask}
      >
        <CloseIcon />
      </button>
    </div>
  );
};

export default ItemRow;
