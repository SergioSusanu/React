
import { useEffect, useState } from 'react';
import './App.css';

const withMouseCoords = (WrappedComponent) => {
  return (props) => {
    const [mouseposition, setMouseposition] = useState({x:0, y:0})
    useEffect(()=>{

        const handleMouseMove = (e) => {
          setMouseposition({x:e.clientX, y:e.clientY})
        }
      window.addEventListener("mousemove", handleMouseMove)
      return () => window.removeEventListener("mousemove", handleMouseMove);
    },[])

    return <WrappedComponent {...props} mouseposition={mouseposition}/>
  }
}

const MouseCoordsViewSimple = ({mouseposition}) => {
  return (
   <div>
    <p>x: {mouseposition.x}</p>
     <p>y: {mouseposition.y}</p>
  </div>)
}

const MouseCoordsViewGreen = ({ mouseposition }) => {
  return (
    <div style={{backgroundColor:"green"}}>
      <p>x: {mouseposition.x}</p>
      <p>y: {mouseposition.y}</p>
    </div>
  );
};

function App() {
  const mouseposition = { x: 15, y: 30 };

  const SimpleView1 = withMouseCoords(MouseCoordsViewSimple)
  const GreenView1 = withMouseCoords(MouseCoordsViewGreen);

  return (
    <div className="App">
      <SimpleView1  />
      <GreenView1 />
    </div>
  );
}

export default App;
