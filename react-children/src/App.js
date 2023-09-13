import logo from './logo.svg';
import './App.css';
import React, { cloneElement } from 'react';

const Row = ({children, marginBottom}) => {
  return (
  <div style={{backgroundColor:"red"}}>
    {React.Children.map(children, (child, index) => {
      return cloneElement(child, {
        style: {
          ...child.props.style,
          ...(index === 2 ? { backgroundColor: "blue" } : {}),
          ...{paddingBottom: marginBottom}
        },
      });
    })}
  </div>
  )
}


function App() {
  return (
    <div className="App">
   <Row marginBottom={200} >
    <p style={{color:"yellow"}}>pizza</p>
    <p>price:24</p>
    <p>thin crust</p>
    <p>extra hot</p>
   </Row>
    </div>
  );
}

export default App;
