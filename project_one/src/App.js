import ExpenseItem from "./Components/ExpenseItem";

function App() {
  return (
    <div>
      <h1>Let's get Started</h1>
      <ExpenseItem
        date={new Date(2024, 7, 15)}
        location="Bangalore"
        title="Insurance"
        price="50"
      ></ExpenseItem>
      <ExpenseItem
        date={new Date(2024, 3, 25)}
        location="Delhi"
        title="Book"
        price="20"
      ></ExpenseItem>
      <ExpenseItem
        date={new Date(2024, 8, 22)}
        location="Hyderabad"
        title="pen"
        price="5"
      ></ExpenseItem>
      <ExpenseItem
        date={new Date(2024, 10, 10)}
        location="Mumbai"
        title="Laptop"
        price="200"
      ></ExpenseItem>
    </div>
  );
}

export default App;
