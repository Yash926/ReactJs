import React, { useState } from 'react';

const ItemList = () => {
  const [isListVisible, setIsListVisible] = useState(true);


  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  
  const toggleListVisibility = () => {
    setIsListVisible((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggleListVisibility}>
        {isListVisible ? 'Hide List' : 'Show List'}
      </button>

      {isListVisible && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
