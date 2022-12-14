import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import "./ExpenseItem.css";

function ExpenseItem(props) {
    // let title = props.title;
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('helloooo!!!')
        console.log(title);
    };

    return (
        <li>
            <Card className="expense-item">
            <ExpenseDate date={props.date} />
                {/* <div>{props.date.toISOString()}</div> */}
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                <button onClick={clickHandler}>Change Title</button>
            </Card>
        </li>
    );
}

export default ExpenseItem;