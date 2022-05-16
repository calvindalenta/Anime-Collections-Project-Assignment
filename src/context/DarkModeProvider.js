import { createContext, useEffect, useState } from 'react';
import { fetchTheme, saveTheme } from 'storage/theme';

const DarkModeContext = createContext();

function DarkModeProvider(props){
  const [darkMode, setDarkMode] = useState(fetchTheme());

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    saveTheme(darkMode)
  }, [darkMode])

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {props.children}
    </DarkModeContext.Provider>
  )
};

export { DarkModeContext, DarkModeProvider };