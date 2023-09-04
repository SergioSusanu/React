import "./App.css";
import MealsList from "./components/MealsList";
import MealsProvider from "./components/MealsProviders";
import MealsCount from "./components/MealsCount";

function App() {
  return (
    <MealsProvider>
      <MealsList />
      <MealsCount />
    </MealsProvider>
  );
}

export default App;
