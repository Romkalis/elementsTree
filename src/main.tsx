import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { Tree } from "./interfaces.ts";

export const data: Tree = {
  id: "1",
  name: "Root",
  children: [
    {
      id: "2",
      name: "Child 1",
      children: [
        { id: "3", name: "Grandchild 1", children: [] },
        { id: "4", name: "Grandchild 2", children: [] },
      ],
    },
    {
      id: "5",
      name: "Child 2",
      children: [],
    },
  ],
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App data={data}/>
  </React.StrictMode>
);
