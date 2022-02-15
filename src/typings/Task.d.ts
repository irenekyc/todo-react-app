import { ITEM_STATUS_ACTIVE, ITEM__STATUS_COMPLETED } from "../constants/item";

export type TaskItem = {
  id: string;
  state: typeof ITEM_STATUS_ACTIVE | typeof ITEM__STATUS_COMPLETED;
  content: string;
};
