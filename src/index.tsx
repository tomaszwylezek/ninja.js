import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

const element: HTMLElement = document.getElementById(
  "user-data"
) as HTMLElement;

const userData = JSON.parse(element.dataset.users as any);

ReactDOM.render(<App rows={userData} />, document.getElementById("root"));
