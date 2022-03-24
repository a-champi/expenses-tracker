import React from 'react';
import { useContext } from 'react'
import { IncomeContext, TransactionsContext } from '../context/GlobalContext'

const Balance = () => {
	const [income] = useContext(IncomeContext);
	//const [expense, setExpense] = useContext(ExpenseContext);
	const [transactions] = useContext(TransactionsContext);

	const incomeAll = transactions.filter(item => item.price > 0).reduce((acc, current) => {
		return acc + current.price

	}, income);

	const expenseAll = transactions.filter(item => item.price < 0).reduce((acc, current) => {
		return acc += current.price
	}, 0);

	const balance = (incomeAll - (-expenseAll));

	return (

		<section className="balance">
			<h2 className="balance__title">Balance <span>{balance} Euro</span></h2>
			<div className='balance__container'>
				<section className="balance__income">
					<p>Income: <br/> <output>{incomeAll} Euro</output></p>
				</section>
				<section className="balance__expense">
					<p>Expense: <br/><output>{expenseAll} Euro</output></p>
				</section>
			</div>
		</section>
	)
}


export default Balance;