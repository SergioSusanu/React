import React from 'react'
import ComponentC from './ComponentC';

const ComponentB = () => {
  return (
    <div>
      {console.log("comp B")}
      <ComponentC />
    </div>
  );
}

export default ComponentB