import React, { FunctionComponent } from "react";
import {
  ITEM_STATUS_ACTIVE,
  ITEM__STATUS_COMPLETED,
} from "../../constants/item";
import styles from "./ItemRow.module.scss";
import Checkbox from "../checkbox";
import { CloseIcon } from "../icons";
import classnames from "classnames";

interface ItemRowProps {
  state: typeof ITEM_STATUS_ACTIVE | typeof ITEM__STATUS_COMPLETED;
  content: string;
}

const ItemRow: FunctionComponent<ItemRowProps> = ({ state, content }) => {
  return (
    <div className={classnames(styles.itemRow, styles.itemRow__dark)}>
      <button>
        <Checkbox active={state === ITEM__STATUS_COMPLETED} />
      </button>
      <span
        className={classnames({
          [styles.cross]: state === ITEM__STATUS_COMPLETED,
        })}
      >
        {content}
      </span>
      <button className={styles.itemRow__deleteButton}>
        <CloseIcon />
      </button>
    </div>
  );
};

export default ItemRow;
