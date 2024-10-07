import React, { useState, useEffect, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import './activity5.css';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Log the count value changes
  useEffect(() => {
    console.log(`Count value: ${count}`);
  }, [count]);

  return (
    <div className={`app ${theme}`}>
      <h1>Counter App</h1>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <hr />
      <button onClick={toggleTheme}>Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme</button>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Counter />
    </ThemeProvider>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
