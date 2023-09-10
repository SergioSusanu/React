import React from 'react'
import ComponentB from './ComponentB';

const ComponentA = React.memo(() => {
  return (
    <div>
      {console.log("comp A")}
      <ComponentB />
    </div>
  );
})

export default ComponentA