import React, { useEffect } from "react";
import Header from "./components/header";
import TaskList from "./components/task-list";
import { useDispatch } from "react-redux";
import { TODO_THEME_LOCAL_STORATGE, THEME_DEFAULT } from "./constants/theme";
import { ThemeType } from "./typings/Theme";
import { updateTheme } from "./reducer/theme/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTheme: ThemeType =
      (window.localStorage.getItem(TODO_THEME_LOCAL_STORATGE) as ThemeType) ||
      THEME_DEFAULT;

    dispatch(updateTheme(savedTheme));
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <TaskList />
    </div>
  );
}

export default App;
