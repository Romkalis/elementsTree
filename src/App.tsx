import './App.css'
import { Tree } from './interfaces';
import { ItemsTree } from './components/ItemsTree';

// interface AppProps {
//   data: Tree;
// }

export const App = ({ data }) => {
  return (
    <>
      <ItemsTree data={data}></ItemsTree>
    </>
  )  

}



