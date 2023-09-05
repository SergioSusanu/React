import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';

const walletReducer = (state, action) => {
 if (action.type === "add-money") {
   return { money: state.money + 20 };
 } else if (action.type === "spend-money") {
   return { money: state.money - 20 };
 }
 return new Error()
}

function App() {

  const initialState = {money:1000};
  const [wallet, dispatch] = useReducer(walletReducer, initialState)

  const handleAddButton = () => {
    dispatch({type:"add-money"})
  }

   const handleSubtractButton = () => {
     dispatch({ type: "spend-money" });
   };

  return (
    <div>
      Wallet has {wallet.money}$
      <button onClick={handleAddButton}>Add 20$</button>
      <button onClick={handleSubtractButton}>Spend 20$</button>
    </div>
  );
}

export default App;
