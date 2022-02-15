import { todoSlice } from "../todoSlice";

export const {
  loadTodo,
  addTask,
  deleteTask,
  clearCompletedTasks,
  markTaskCompleted,
} = todoSlice.actions;
