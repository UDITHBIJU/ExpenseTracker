import React from 'react'
import ExpenseForm from './ExpenseForm'
import "../css/NewExpense.css"

export default function NewExpense({onAddExpense}) {
  function saveExpenseDataHandler(enterdExpesneData){
    const expenseData ={
      ...enterdExpesneData,
      id : Math.random().toString()
    };
    onAddExpense(expenseData); //passing data to parent component on add expense is a function 

  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData ={saveExpenseDataHandler}/> 
    </div>
  )
}
