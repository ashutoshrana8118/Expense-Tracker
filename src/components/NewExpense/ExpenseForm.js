import React, {useState}from 'react';

import './ExpenseForm.css';

const ExpenseForm =(props)=>{

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
   


    const titleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event)=>{
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event)=>{
        event.preventDefault();

        const expenseData = {
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        console.log(expenseData);
        
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        

    };








    return(
        <form onSubmit={submitHandler}>
            <div className="new-expenses__controls">
                <div  className="new-expenses__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>
                <div  className="new-expenses__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} onChange ={amountChangeHandler}></input>
                </div>
                <div  className="new-expenses__control">
                    <label>Date</label>
                    <input type="Date" value={enteredDate} onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className="new-expenses__actions">
                <button type="sumbit"> Add Expense</button>

            </div>
        </form>
    )

}
export default ExpenseForm;