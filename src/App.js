import './App.css';
import React, {useState} from 'react';

function App() {

  // state hook- useState
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);

  // helper functions
  function addItem() {

    if(!newItem) {
      alert('enter an item!');
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  }

  function deleteItem(id){
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="App">
    {/* header */}
      <h1>todo list app</h1>

      {/* input */}
      <input
        type="text"
        placeholder='add an item'
        value={newItem}
        onChange={e=> setNewItem(e.target.value)}
        />
      {/* button */}
      <button onClick={()=> addItem()}>add</button>
      <ul>
        {items.map(item => {
          return(
            <li key = {item.id}>{item.value} <button className='delete-button' onClick={()=> deleteItem(item.id)}>❌</button></li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
