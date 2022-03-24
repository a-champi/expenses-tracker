import React, { useContext } from "react";
import { TransactionsContext } from "../context/GlobalContext";
import Transaction from "./Transaction";

const AddTransaction = () => {
  const currentTransaction = {};
  const [transactions, setTransactions] = useContext(TransactionsContext);

  // submitHandler
  const submitHandler = (e) => {
    e.preventDefault();
    const inputTitle = document.querySelector("#text-transaction");
    const inputAmount = document.querySelector("#amount-transaction");
    if(isNaN(inputAmount.value)) {
      return alert("Please enter a number");
    }
    const newTransaction = [...transactions];

    currentTransaction.id = transactions.length;

    newTransaction.push(currentTransaction);
    setTransactions(newTransaction);

    inputTitle.value = "";

    inputAmount.value = "";

    inputTitle.focus();
  };

  // HandleInputItem
  const handleInputText = (e) => {
    currentTransaction.title = e.target.value;
  };
  //handleInputNumber
  const handleInputNumber = (e) => {
    currentTransaction.price = Number(e.target.value);
  };

  return (
    <>
      {transactions.map((trans, id) => {
        return (
          <div key={id}>
            <Transaction
              title={trans.title}
              price={trans.price}
              id={trans.id}
            />
          </div>
        );
      })}
      <form onSubmit={submitHandler}>
        <h2 className="form__title">Add Transaction</h2>

        <label htmlFor="text-transaction"> Transaction</label>
        <input
          required
          value={transactions.title}
          type="text"
          onChange={handleInputText}
          name="text-transaction"
          id="text-transaction"
          placeholder="Enter text"
        />
        <label htmlFor="">Amount <span className="amount__info">(By expenses use negative(-))</span></label>
        <input
          required
          value={transactions.amount}
          onChange={handleInputNumber}
          type="text"
          name="amount-transaction"
          id="amount-transaction"
          placeholder="Enter amount"
        />
        <button className="btn__add">Add</button>
      </form>
    </>
  );
};
export default AddTransaction;
