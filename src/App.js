import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses = [
  {
    id: "e1",
    title: "Banana",
    amount: 50,
    date: new Date(2022, 1, 14),
  },
  {
    id: "e2",
    title: "Brown Bread",
    amount: 45,
    date: new Date(2022, 1, 25),
  },
  {
    id: "e3",
    title: "Jeans",
    amount: 650,
    date: new Date(2022, 1, 29),
  },
  {
    id: "e4",
    title: "shirt",
    amount: 499,
    date: new Date(2022, 2, 4),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseDataHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return (
  //   <div>
  //     <NewExpense />
  //     <Expenses items={expenses} />
  //   </div>
  // );

  return React.createElement(
    "div",
    {},
    React.createElement(NewExpense, {
      onAddExpenseData: addExpenseDataHandler,
    }),
    React.createElement(Expenses, { items: expenses })
  );
};

export default App;
