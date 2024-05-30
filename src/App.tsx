import './App.css'
import { Tree } from './interfaces';
// import {Parent} from './ParentComponent.tsx';
import { ItemsTree } from './ItemsTree';

interface AppProps {
  data: Tree;
}

// const checkChild = (object: any): boolean => {
//   for (const key in object) {

//     if (Array.isArray(object[key]) && object[key].legth !== 0) {
//       return true;
//     }

//     if (typeof object[key] === 'object' && object[key] !== null) {
//       return true;
//     }
//   }
//   return false
// }

export const App: React.FC<AppProps> = ({ data }) => {
  return (
    <>
      <ItemsTree data={data}></ItemsTree>
    </>
  )  

}



