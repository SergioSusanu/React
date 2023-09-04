import React, { useContext } from 'react'
import { useMealsListContext, MealsContext } from './MealsProviders'

const MealsList = () => {

    // const {meals} = useMealsListContext() use this or like below
    const {meals} = useContext(MealsContext)

  return (
    <div>
      <ul>
        {meals.map((meal, index) => {
          return <li key={index}>{meal}</li>;
        })}
      </ul>
    </div>
  );
}

export default MealsList