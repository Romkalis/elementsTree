import React from "react";
import { Tree } from "./interfaces";

interface ParentProps {
  data: Tree;
}

export function Parent({ data }: ParentProps) {
  console.log(Object.keys(data).map((key) => console.log(data[key])));

  return (
    <ul>
      {Object.keys(data).map((key) => {
        return <li key={key}>{data[key]}</li>; // Добавлено возвращение внутри map
      })}
    </ul>
  );
}