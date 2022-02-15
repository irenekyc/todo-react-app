import React, { useEffect } from "react";
import Header from "./components/header";
import TaskList from "./components/task-list";
import { useDispatch } from "react-redux";
import { TODO_THEME_LOCAL_STORATGE, THEME_DEFAULT } from "./constants/theme";
import { ThemeType } from "./typings/Theme";
import { updateTheme } from "./reducer/theme/actions";
import { loadTodo } from "./reducer/todo/actions";
import { TaskItem } from "./typings/Task";
import { TODO_ITEMS_LOCAL_STORAGE } from "./constants/item";

// const tasks: TaskItem[] = [
//   {
//     id: "abx-1",
//     state: "completed",
//     content: "Complete online Javscript course",
//   },
//   {
//     id: "abx-2",
//     state: "active",
//     content: "Jog around the park 3x",
//   },
//   {
//     id: "abx-3",
//     state: "active",
//     content: "10 minutes meditation",
//   },
//   {
//     id: "abx-4",
//     state: "active",
//     content: "Read for 1 hour",
//   },
//   { id: "abx-5", state: "active", content: "Pick up groceries" },
//   {
//     id: "abx-6",
//     state: "active",
//     content: "Complete Todo App on Frontend Mentor",
//   },
// ];

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTheme: ThemeType =
      (window.localStorage.getItem(TODO_THEME_LOCAL_STORATGE) as ThemeType) ||
      THEME_DEFAULT;

    dispatch(updateTheme(savedTheme));
    const savedTasks = window.localStorage.getItem(TODO_ITEMS_LOCAL_STORAGE);
    if (savedTasks) {
      const tasks = JSON.parse(savedTasks) as TaskItem[];
      dispatch(loadTodo(tasks));
    }
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <TaskList />
    </div>
  );
}

export default App;
