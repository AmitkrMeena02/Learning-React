import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "1",
    date: new Date(2024, 7, 15),
    location: "Bangalore",
    title: "Insurance",
    price: 100,
  },
  {
    id: "2",
    date: new Date(2025, 3, 25),
    location: "Delhi",
    title: "Book",
    price: 10,
  },
  {
    id: "3",
    date: new Date(2023, 10, 11),
    location: "Hyderabad",
    title: "Pen",
    price: 1,
  },
  {
    id: "4",
    date: new Date(2023, 1, 14),
    location: "Mumbai",
    title: "Laptop",
    price: 200,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseDataHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseDataHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
