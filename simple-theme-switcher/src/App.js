import logo from './logo.svg';
import './App.css';
import { Switch } from '@mui/material';
import TopBar from './components/TopBar';
import Body from './components/Body';
import { useTheme } from './ThemeProvider';


function App() {

  const {theme, toggleTheme} =  useTheme()

  return (
    <div className={theme.bgClass}>
      <header>
        <div id='topBar'><TopBar /></div>
        <div id='themeSwitcher'><Switch 
        defaultChecked 
        onChange={toggleTheme}
        color={theme.appearance === "light" ? "primary" : "default"}
        /></div>
      </header>
      <main>
        <Body />
      </main>
     
    </div>
  );
}

export default App;
