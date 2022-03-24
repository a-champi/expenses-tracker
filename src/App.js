import React from "react";
import "./App.css";
import Header from "./components/Header";
import AddTransaction from './components/AddTransaction';
import { IncomeContextProvider, TransactionsContextProvider, ExpenseContextProvider} from "./context/GlobalContext";

function App() {
  return (
    <TransactionsContextProvider>
      <IncomeContextProvider>
        <ExpenseContextProvider>
          <Header />

          <AddTransaction />
        </ExpenseContextProvider>
      </IncomeContextProvider>
    </TransactionsContextProvider>
  );
}

export default App;
