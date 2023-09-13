import logo from './logo.svg';
import './App.css';
import MyComp from './MyComp';

function App() {
  let a = 3;
  let res = "";
  const array = ['toavina','irintsoa','mirindra']
  for (let i = 0; i < array.length; i++) {
       res+= array[i]+" ";
  }
  return (
    <div className="App">
        <MyComp data="dada"/>{}
    </div> 
  );
}

export default App;
