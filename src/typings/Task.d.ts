import { ITEM_STATUS_ACTIVE, ITEM__STATUS_COMPLETED } from "../constants/item";

export type TaskStatusType =
  | typeof ITEM_STATUS_ACTIVE
  | typeof ITEM__STATUS_COMPLETED;

export type TaskItem = {
  id: string;
  state: TaskStatusType;
  content: string;
};
