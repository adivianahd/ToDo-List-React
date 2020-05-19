import React, {useState} from 'react';
import List from './components/list/List';
import Input from './components/input/Input';
import Button from './components/button/Button';

function App() {
  return (
    <div className="App">
      <Input/>
      <Button/>
      <List/>
    </div>
  );
}

export default App;
