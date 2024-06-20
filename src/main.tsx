import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { Tree } from "./interfaces.ts";

const data: Tree = {
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

const data2 = {
  id: "root",
  name: "root",
  children: [
    {
      id: "1",
      name: "Root 1",
      children: [
        {
          id: "1-1",
          name: "Child 1-1",
          children: [
            { id: "1-1-1", name: "Grandchild 1-1-1", children: [] },
            { id: "1-1-2", name: "Grandchild 1-1-2", children: [] },
          ],
        },
        {
          id: "1-2",
          name: "Child 1-2",
          children: [{ id: "1-2-1", name: "Grandchild 1-2-1", children: [] }],
        },
      ],
    },
    {
      id: "2",
      name: "Root 2",
      children: [
        {
          id: "2-1",
          name: "Child 2-1",
          children: [
            { id: "2-1-1", name: "Grandchild 2-1-1", children: [] },
            { id: "2-1-2", name: "Grandchild 2-1-2", children: [] },
            { id: "2-1-3", name: "Grandchild 2-1-3", children: [] },
          ],
        },
      ],
    },
    {
      id: "3",
      name: "Root 3",
      children: [],
    },
    {
      id: "4",
      name: "Root 4",
      children: [
        {
          id: "4-1",
          name: "Child 4-1",
          children: [{ id: "4-1-1", name: "Grandchild 4-1-1", children: [] }],
        },
        {
          id: "4-2",
          name: "Child 4-2",
          children: [
            { id: "4-2-1", name: "Grandchild 4-2-1", children: [] },
            { id: "4-2-2", name: "Grandchild 4-2-2", children: [] },
          ],
        },
      ],
    },
    {
      id: "5",
      name: "Root 5",
      children: [
        {
          id: "5-1",
          name: "Child 5-1",
          children: [],
        },
      ],
    },
    {
      id: "6",
      name: "Root 6",
      children: [
        {
          id: "6-1",
          name: "Child 6-1",
          children: [{ id: "6-1-1", name: "Grandchild 6-1-1", children: [] }],
        },
      ],
    },
    {
      id: "7",
      name: "Root 7",
      children: [],
    },
    {
      id: "8",
      name: "Root 8",
      children: [
        {
          id: "8-1",
          name: "Child 8-1",
          children: [],
        },
        {
          id: "8-2",
          name: "Child 8-2",
          children: [],
        },
      ],
    },
    {
      id: "9",
      name: "Root 9",
      children: [
        {
          id: "9-1",
          name: "Child 9-1",
          children: [],
        },
      ],
    },
    {
      id: "10",
      name: "Root 10",
      children: [
        {
          id: "10-1",
          name: "Child 10-1",
          children: [
            { id: "10-1-1", name: "Grandchild 10-1-1", children: [] },
            { id: "10-1-2", name: "Grandchild 10-1-2", children: [] },
          ],
        },
      ],
    },
    {
      id: "11",
      name: "Root 11",
      children: [],
    },
    {
      id: "12",
      name: "Root 12",
      children: [
        {
          id: "12-1",
          name: "Child 12-1",
          children: [],
        },
      ],
    },
    {
      id: "13",
      name: "Root 13",
      children: [
        {
          id: "13-1",
          name: "Child 13-1",
          children: [{ id: "13-1-1", name: "Grandchild 13-1-1", children: [] }],
        },
      ],
    },
    {
      id: "14",
      name: "Root 14",
      children: [
        {
          id: "14-1",
          name: "Child 14-1",
          children: [],
        },
        {
          id: "14-2",
          name: "Child 14-2",
          children: [{ id: "14-2-1", name: "Grandchild 14-2-1", children: [] }],
        },
      ],
    },
    {
      id: "15",
      name: "Root 15",
      children: [],
    },
    {
      id: "16",
      name: "Root 16",
      children: [
        {
          id: "16-1",
          name: "Child 16-1",
          children: [{ id: "16-1-1", name: "Grandchild 16-1-1", children: [] }],
        },
        {
          id: "16-2",
          name: "Child 16-2",
          children: [{ id: "16-2-1", name: "Grandchild 16-2-1", children: [] }],
        },
      ],
    },
    {
      id: "17",
      name: "Root 17",
      children: [
        {
          id: "17-1",
          name: "Child 17-1",
          children: [],
        },
      ],
    },
    {
      id: "18",
      name: "Root 18",
      children: [
        {
          id: "18-1",
          name: "Child 18-1",
          children: [],
        },
      ],
    },
    {
      id: "19",
      name: "Root 19",
      children: [
        {
          id: "19-1",
          name: "Child 19-1",
          children: [],
        },
      ],
    },
    {
      id: "20",
      name: "Root 20",
      children: [],
    },
    {
      id: "21",
      name: "Root 21",
      children: [],
    },
    {
      id: "22",
      name: "Root 22",
      children: [],
    },
  ],
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App data={data2} />
  </React.StrictMode>
);
