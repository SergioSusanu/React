import React, { useState } from "react";

export const MealsContext = React.createContext();

const MealsData = ["Chicken Soup", "Lasagna", "Tiramisu", "Coffee"];

const MealsProvider = ({ children }) => {
  const [meals, setMeals] = useState(MealsData);

  return (
    <MealsContext.Provider value={{ meals }}>{children}</MealsContext.Provider>
  );
};

export const useMealsListContext = () => React.useContext(MealsContext);
export default MealsProvider;
