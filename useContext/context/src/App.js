import logo from "./logo.svg";
import "./App.css";
import MealsList from "./components/MealsList";
import MealsProvider from "./components/MealsProviders";

function App() {
  return (
    <MealsProvider>
      <MealsList />
      {/* <MealsCount /> */}
    </MealsProvider>
  );
}

export default App;
