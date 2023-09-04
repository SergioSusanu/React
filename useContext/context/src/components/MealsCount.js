import React from 'react'
import { useMealsListContext } from './MealsProviders'

const MealsCount = () => {

    const {meals} = useMealsListContext()

  return (
    <div>Meal count is {meals.length}</div>
  )
}

export default MealsCount