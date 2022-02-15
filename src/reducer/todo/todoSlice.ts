import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TaskItem, TaskStatusType } from "../../typings/Task";
import {
  ITEM__STATUS_COMPLETED,
  ITEM_STATUS_ACTIVE,
} from "../../constants/item";
import updateTasksLocalStorage from "../../helpers/updateTasksLocalStorage";

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
      updateTasksLocalStorage(newTaskList);
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      const newTaskList = state.tasks.filter(
        (task: TaskItem) => task.id !== action.payload
      );
      state.tasks = newTaskList;
      state.number = updateTaskNumber(newTaskList);
      updateTasksLocalStorage(newTaskList);
    },
    clearCompletedTasks: (state) => {
      const newTaskList = state.tasks.filter(
        (task: TaskItem) => task.state !== ITEM__STATUS_COMPLETED
      );
      state.tasks = newTaskList;
      state.number = updateTaskNumber(newTaskList);
      updateTasksLocalStorage(newTaskList);
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
      updateTasksLocalStorage(newTaskList);
    },
  },
});

export default todoSlice.reducer;
