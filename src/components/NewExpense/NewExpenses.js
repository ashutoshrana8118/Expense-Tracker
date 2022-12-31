import React from "react";
import ExpenseForm from "./ExpenseForm";

import './NewExpense.css';
 
const NewExpenses = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()

        }
        props.onAddExpense(expenseData);
        console.log(expenseData);
    };


    return(
        <div className='new-expenses'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )


      
}
export default NewExpenses;
