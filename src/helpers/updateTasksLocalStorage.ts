import { TaskItem } from "../typings/Task";
import { TODO_ITEMS_LOCAL_STORAGE } from "../constants/item";

const updateTasksLocalStorage = (tasks: TaskItem[]) => {
  window.localStorage.setItem(TODO_ITEMS_LOCAL_STORAGE, JSON.stringify(tasks));
};

export default updateTasksLocalStorage;
