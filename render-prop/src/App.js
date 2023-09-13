import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const FetchMouseCoord =({render}) => {

  const [mouse, setMouse] = useState({x:0,y:0})

    const handleMouseMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

  useEffect(()=>{
    window.addEventListener("mousemove", handleMouseMove)

    return () => window.removeEventListener("mousemove", handleMouseMove);

  },[])

  return render(mouse)
}

const MouseCoordinatesSimpleView = () => {
  return (
    <FetchMouseCoord render={(mouse)=>{
      return (<div>
        <p>x: {mouse.x}</p>
        <p>y: {mouse.y}</p>
      </div>)
    }}/>
  )
}

const MouseCoordinatesRedView = () => {
  return (
    <FetchMouseCoord
      render={(mouse) => {
        return (
          <div style={{backgroundColor:"green"}}>
            <p>x: {mouse.x}</p>
            <p>y: {mouse.y}</p>
          </div>
        );
      }}
    />
  );
};

function App() {
  return (
    <div className="App">
      <MouseCoordinatesSimpleView />
      <MouseCoordinatesRedView />
    </div>
  );
}

export default App;
