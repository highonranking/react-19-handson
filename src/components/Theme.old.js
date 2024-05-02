import React, { createContext, useContext, useState } from 'react';


const ThemeContext = createContext();

export const useTheme = () =>  useContext(ThemeContext);


export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
  
    const toggleTheme = () => {
      setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };



  

  const ThemedComponent = () => {
    const { theme, toggleTheme } = useTheme();
  
    return (
        <div
        className={`max-w-md mx-auto shadow-md rounded-lg p-6 ${
          theme === 'light' ? 'bg-white' : 'bg-gray-800'
        }`}
      >
        <h1
          className={`text-2xl mb-3 ${
            theme === 'light' ? 'text-gray-800' : 'text-white'
          }`}
        >
          Themed Card Old with useContext
        </h1>
        <p className={theme === 'light' ? 'text-gray-800' : 'text-white'}>
        useContext is a React Hook that lets you read and subscribe to context from your component.


        </p>
        {/* Toggle button */}
        <button
          onClick={toggleTheme}
          className='mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
        >
          {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
      </div>
    );
  };
  


const ThemeOld = () => {
  return (
    <ThemeProvider>
        <div className='m-4 p-4'>
        <ThemedComponent />
      </div>
    </ThemeProvider>
  )
}

export default ThemeOld