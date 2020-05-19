import React, {useState} from 'react';
import List from './components/list/List';
import Input from './components/input/Input';
import Button from './components/button/Button';

function App() {
  const [item , setItem] = useState([]);
  const [inputValue , setInputValue] = useState("");
  const cleanInput = ()=>{setInputValue("")}
  const clearInput = ()=>{
    setInputValue("")
    setItem([]);
  }

  return (
    <div align="center" className="App">
      <Input
        value={inputValue}
        change={ change =>{
          setInputValue(change)
        }
      }/>
      <Button 
        clear={clearInput}
        click={
          () => {
            if(inputValue === "") return;
            setItem([inputValue, ...item]);
            cleanInput();
          }
        }
      />
      <List Item={item}/>
    </div>
  );
}

export default App;
