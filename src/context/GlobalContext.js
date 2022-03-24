import React from "react";
import { useState, createContext } from "react";

// ExpenseContext
export const ExpenseContext = createContext();

export const ExpenseContextProvider = (props) => {
  const [expense, setExpense] = useState(0);

  return (
    <>
      < ExpenseContext.Provider value={[expense, setExpense]}>
        {props.children}
      </ExpenseContext.Provider>
    </>
  );
};

// IncomeContext
export const IncomeContext = createContext();
export const IncomeContextProvider = (props) => {
  const [income, setIncome] = useState(0);

  return (
    <>
      <IncomeContext.Provider value={[income, setIncome]}>
        {props.children}
      </IncomeContext.Provider>
    </>
  );
};

//TransactionsContext

export const TransactionsContext = createContext();
export const TransactionsContextProvider = (props) => {
  const [transactions, setTransactions] = useState([]);   
    

  return (
    <>
      <TransactionsContext.Provider value={[transactions, setTransactions]}>
        {props.children}
      </TransactionsContext.Provider>
    </>
  );
};
