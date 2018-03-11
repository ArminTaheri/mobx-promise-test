import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";

import TodoList from "./components/TodoList";
import TodoListModel from "./models/TodoListModel";
import TodoModel from "./models/TodoModel";

const store = new TodoListModel();

render(
  <div>
    <DevTools />
    <TodoList store={store} />
  </div>,
  document.getElementById("root")
);

store.addTodo("Get Coffee");
store.addTodo("Write simpler code");
store.todos[0].finished = true;


const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

// Imagine any Promise or stream of Promises
wait(2000).then(() => store.addTodo("Dominate"));

// playing around in the console
window.store = store;
