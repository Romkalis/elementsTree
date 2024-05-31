import { useState, FC } from "react";
import { Tree } from "./interfaces";

export const ItemsTree: FC<{ data: Tree }> = ({ data }) => {

  const [isClosed, setIsClosed] = useState({});

  const toggleChildHandler = (evt, id) => {

    setIsClosed((prevState) => {
      if (!prevState[id]) {
        return { ...prevState, [id]: true };
      } else {
        return { ...prevState, [id]: !prevState[id] };
      }
    });
    evt.stopPropagation();
  };

  const renderTree = (object) => {

      return (
        <div
          className="parent"
          style={{ marginLeft: "20px", cursor: "pointer" }}
          key={object.id}
          onClick={(evt) => toggleChildHandler(evt, object.id)}
        >
          <p>
            <span>
              {isClosed[object.id] &&  object.children?.length !== 0 ? " v " : " > "}
              </span>
            <b>{object.name}</b>
          </p>
          <div className="children" style={isClosed[object.id] ? {display: "block"} : {display: "none"}}>
          { 
            object.children?.length !== 0 
              ? object.children.map((child) => renderTree(child)) 
              : null
          }
          </div>
        </div>
      );
  };


  return <div>{renderTree(data)}</div>;
};
