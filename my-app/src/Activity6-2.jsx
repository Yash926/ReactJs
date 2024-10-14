import React, { useState, useEffect } from 'react';

const LoggerComponent = ({ watchedProp }) => {

  const [count, setCount] = useState(0);

 
  useEffect(() => {
    console.log('Component re-rendered because "count" or "watchedProp" changed');
  }, [count, watchedProp]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default LoggerComponent;
