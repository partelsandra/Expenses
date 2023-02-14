import React, {useState} from 'react'

import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card"

const ExpenseItem = (props) => {
    console.log('ExpenseItem', props)
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.expenseData.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.expenseData.title}</h2>
                <div className="expense-item__price">{props.expenseData.amount}€</div>
            </div>
        </Card>
    )
}

export default ExpenseItem
