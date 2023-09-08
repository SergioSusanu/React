import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext(undefined)

const darkTheme = {
    appearance:"dark",
    textClass:"light", 
    bgClass: "dark-bg"
}

const lightTheme = {
  appearance: "light",
  textClass: "dark",
  bgClass: "light-bg",
};


const ThemeProvider = ({children}) => {

  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prev) => prev.appearance === "light" ? darkTheme : lightTheme) 
  } 

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
export default ThemeProvider