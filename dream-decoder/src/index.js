// This code creates a to do list. It allows users to add items to the list and delete items from the list.

import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState(''); // State for the input field
  const [listItems, setListItems] = useState([]); // State for the list of items

  const addItem = () => {
    if (inputValue) {
      setListItems([...listItems, inputValue]); // Add the new item to the list
      setInputValue(''); // Clear the input field
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addItem();
    }
  }

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  }

  const deleteItem = (event) => {
    const index = event.target.getAttribute('data-item');
    const newList = [...listItems]; // Make a copy of the list of items
    newList.splice(index, 1);
    setListItems(newList);
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className="add-item">
        <input
          type="text"
          value={inputValue}
          onChange={handleOnChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={addItem}>Add</button>
      </div>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>
            {item}
            <button
              data-item={index}
              onClick={deleteItem}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;