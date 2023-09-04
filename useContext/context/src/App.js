import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <MealsProvider>
      <MealsList />
      <MealsCount />
   </MealsProvider>
  );
}

export default App;
