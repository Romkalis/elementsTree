import { useState, FC, MouseEvent } from "react";
import { Indicator } from "./Indicator";
import { Tree } from "../interfaces";

interface State {
  [key: string]: boolean;
}

export const ItemsTree: FC<{ data: Tree }> = ({ data }) => {
  const generateInitialState = (node: Tree): State => {
    const initialState: State = {};

    const getInitialState = (node: Tree) => {
      initialState[node.id] = true;
      if (node.children && node.children.length > 0) {
        node.children.forEach((child) => {
          getInitialState(child);
        });
      }
    };
    getInitialState(node);

    return initialState;
  };
  const [isClosed, setIsClosed] = useState<State>(() =>
    generateInitialState(data)
  );

  const toggleChildHandler = (evt: MouseEvent, id: string) => {
    setIsClosed((prevState) => {
      if (!prevState[id]) {
        return { ...prevState, [id]: true };
      } else {
        return { ...prevState, [id]: !prevState[id] };
      }
    });
    evt.stopPropagation();
  };

  const renderTree = (object: Tree) => {
    return (
      <div
        className="parent"
        key={object.id}
        onClick={(evt) => toggleChildHandler(evt, object.id)}
      >
        <p>
          <Indicator
            type={"checkbox"}
            status={isClosed[object.id] && object.children?.length !== 0}
          />
          <b>{object.name}</b>
        </p>
        <div
          className="children"
          style={
            isClosed[object.id] ? { display: "block" } : { display: "none" }
          }
        >
          {object.children && object.children?.length !== 0
            ? object.children.map((child) => renderTree(child))
            : null}
        </div>
      </div>
    );
  };

  return <div>{renderTree(data)}</div>;
};
