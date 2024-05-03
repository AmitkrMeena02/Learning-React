import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((expense, index) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            location={expense.location}
            title={expense.title}
            price={expense.price}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
