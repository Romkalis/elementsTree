import './App.css'
import { Tree } from './interfaces';
// import {Parent} from './ParentComponent.tsx';
import { useState } from 'react';

interface AppProps {
  data: Tree;
}

const checkChild = (object: any): boolean => {
  for (const key in object) {

    if (Array.isArray(object[key]) && object[key].legth !== 0) {
      return true;
    }

    if (typeof object[key] === 'object' && object[key] !== null) {
      return true;
    }
  }
  return false
}


const ItemsTree = ({data}) => {

  const [itemToggle, setItemToggle] = useState({});
  const itemToggler = (item) => {
    setItemToggle( prevState => ({...prevState, [item.id]: !prevState[item.id]}))
  }

  const renderTree = (entities) => {
    return entities.map( entity => {
      return (
        <div key={entity.id} onLoad={itemToggler}>
          <p>{entity.name}</p>
        </div>
      )
    }) 
  }

  return (
    <div>
      {renderTree(data)}
    </div>
  )
}





export const App: React.FC<AppProps> = ({ data }) => {
  console.log(data)
  return (
    <>
      <ItemsTree data={data}></ItemsTree>
    </>
  )  

}



