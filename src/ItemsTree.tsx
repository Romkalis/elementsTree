import { useState, FC } from "react";
import { Tree } from "./interfaces";

export const ItemsTree: FC<{ data: Tree }> = ({ data }) => {
  // console.log(data);

  const [isClosed, setIsClosed] = useState({});

  const toggleChildHandler = (evt, id) => {
    
    console.log('isClosedState Now ', isClosed, 'id__', id);

    setIsClosed((prevState) => {

    console.log('prevState[id] ', prevState[id])

      if (!prevState[id]) {
        return { ...prevState, [id]: true };
      } else {
        return { ...prevState, [id]: !prevState[id] };
      }
    });

    evt.stopPropagation();
  };

  const renderTree = (object) => {
    
    if (object.children?.length === 0) {
      return (
        <div style={{ marginLeft: "20px", cursor: "pointer" }}key={object.id}
        >
          <p onClick={(evt) => toggleChildHandler(evt, object.id)}>
            <span>{isClosed[object.id] ? " v " : " > "}</span>
            {object.name}
          </p>
        </div>
      );
    } else {
      return (
        <div
          className="parent"
          style={{ marginLeft: "20px", cursor: "pointer" }}
          key={object.id}
          onClick={(evt) => toggleChildHandler(evt, object.id)}
        >
          <p>
            <span>{isClosed[object.id] ? " v " : " > "}</span>

            {object.name}
          </p>

          { 
            object.children?.length !== 0 
              ? object.children.map((child) => renderTree(child)) 
              : null
          }
        </div>
      );
    }
  };

  // return (
  //   <div className="parent" key={object.id} >
  //     <p onClick={() => toggleChildHandler(object.id)}>
  //       <span> {isClosed[object.id] ? " v " : " > "} </span>
  //       {object.name}
  //     </p>
  //     {
  //        object.children && object.children.length > 0 && (
        
  //         <div className="children" style={ isClosed[object.id] && {border: " 1px solid red"}} >
  //           {object.children.map((child) => renderTree(child))}
  //         </div>
  //     )
  //     }
  //   </div>
  // );

  return <div>{renderTree(data)}</div>;
};
