import React from 'react'
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import { useTheme } from '../ThemeProvider';

const TopBar = () => {
  const {theme} = useTheme()
  
  return (
    <div>
      <span className={theme.textClass}>MyPizzeria</span>
      <LocalPizzaIcon className={theme.textClass} />
    </div>
  );
}

export default TopBar