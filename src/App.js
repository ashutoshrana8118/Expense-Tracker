import React,{useState} from 'react';
import NewExpenses from './components/NewExpense/NewExpenses';
import Expenses from './components/Expenses/Expenses';

let Dummy_EXPENSE =[
        {
            id:'e1',
            title: 'school Fee',
            amount: 250,
            date: new Date(2021,5, 12)

        },
        {
            id:'e2',
            title: 'hostel Fee',
            amount: 350,
            date: new Date(2021,2, 22)

        },
        
        {
            id:'e3',
            title: 'Book',
            amount: 502,
            date: new Date(2021,4, 2)

        },

        {
            id:'e4',
            title: 'House Rent',
            amount: 850,
            date: new Date(2021,7, 15)

        }

    
];  
const App = () => {
    
    const [expenses, setExpenses] = useState(Dummy_EXPENSE);

    
    const addExpenseHandler = (expense) => {
        const updatedExpenses = [expense, ...expenses];
        setExpenses(updatedExpenses);
    };


    return (
        <div> 
            <NewExpenses onAddExpense={addExpenseHandler}/>
            <Expenses item={expenses}/>
            
            
        </div>  
    ); 
}

export default App;