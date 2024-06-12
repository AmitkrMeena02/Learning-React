import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  function buttonClickHandler() {
    setTitle("New Title");
  }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate calendarDate={props.date} />
        <div className="expense-item__location">{props.location}</div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.price}</div>
        </div>
        <button onClick={buttonClickHandler}>Change Title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
