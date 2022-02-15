import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TODO_THEME_LOCAL_STORATGE } from "../../constants/theme";
import { TaskItem, TaskStatusType } from "../../typings/Task";
import {
  ITEM__STATUS_COMPLETED,
  ITEM_STATUS_ACTIVE,
  TODO_ITEMS_LOCAL_STORAGE,
} from "../../constants/item";

export interface TodoState {
  tasks: TaskItem[];
  number: {
    completed: number;
    active: number;
  };
}

const initialState: TodoState = {
  tasks: [],
  number: {
    completed: 0,
    active: 0,
  },
};

const updateTaskNumber = (
  tasks: TaskItem[]
): {
  completed: number;
  active: number;
} => {
  return {
    completed: tasks.filter(
      (task: TaskItem) => task.state === ITEM__STATUS_COMPLETED
    ).length,
    active: tasks.filter((task: TaskItem) => task.state === ITEM_STATUS_ACTIVE)
      .length,
  };
};

const updateLocalStorage = (tasks: TaskItem[]) => {
  window.localStorage.setItem(TODO_ITEMS_LOCAL_STORAGE, JSON.stringify(tasks));
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    loadTodo: (state, action: PayloadAction<TaskItem[]>) => {
      state.tasks = action.payload;
      state.number = updateTaskNumber(action.payload);
    },
    addTask: (state, action: PayloadAction<TaskItem>) => {
      const newTaskList = [...state.tasks, action.payload];
      state.tasks = newTaskList;
      state.number = updateTaskNumber(newTaskList);
      updateLocalStorage(newTaskList);
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      const newTaskList = state.tasks.filter(
        (task: TaskItem) => task.id !== action.payload
      );
      state.tasks = newTaskList;
      state.number = updateTaskNumber(newTaskList);
      updateLocalStorage(newTaskList);
    },
    clearCompletedTasks: (state) => {
      const newTaskList = state.tasks.filter(
        (task: TaskItem) => task.state !== ITEM__STATUS_COMPLETED
      );
      state.tasks = newTaskList;
      state.number = updateTaskNumber(newTaskList);
      updateLocalStorage(newTaskList);
    },
    markTaskCompleted: (state, action: PayloadAction<string>) => {
      const newTaskList = state.tasks.map((task: TaskItem) => {
        if (task.id === action.payload) {
          return {
            ...task,
            state: ITEM__STATUS_COMPLETED as TaskStatusType,
          };
        }
        return task;
      });
      state.tasks = newTaskList;
      state.number = updateTaskNumber(newTaskList);
      updateLocalStorage(newTaskList);
    },
  },
});

export default todoSlice.reducer;
