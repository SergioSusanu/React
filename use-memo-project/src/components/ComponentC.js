import React, { useContext } from 'react'
import { AppContext } from '../App';

const ComponentC = () => {

    const {counter2} = useContext(AppContext)

  return (
    <div>
      {console.log("comp C")}
      <p>Counter is: {counter2.toString()}</p>
    </div>
  );
}

export default ComponentC