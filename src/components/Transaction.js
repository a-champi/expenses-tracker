import React, { useContext } from "react";
import { TransactionsContext } from "../context/GlobalContext";
const Transaction = ({ id, title, price }) => {
  const [transactions, setTransactions] = useContext(TransactionsContext);

  const handlerDelete = () => {
    const newDelete = transactions.filter((item) => item.id !== id);
    //const newDelete = [...transactions];
    //newDelete.splice(id, 1);
    setTransactions(newDelete);
  };

  return (
    <li className="transaction">
      <button onClick={handlerDelete} className="btn__list">
        X
      </button>
      <h4 className="transaction__title">{title} </h4>
      <p className="transaction__price">
        <span>{price}</span> Euro
      </p>
    </li>
  );
};
export default Transaction;
