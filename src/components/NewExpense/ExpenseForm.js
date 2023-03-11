import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const [open, setOpen] = useState(false);

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }

  function addExpenseHandler() {
    setOpen(!open);
  }

  function cancelHandler() {
    setOpen(!open);
  }

  //   const [userInput, setUserInput] = useState({
  //     setEnteredTitle: "",
  //     setEnteredAmount: "",
  //     setEnteredDate: "",
  //   });

  //   function titleChangeHandler(event) {
  //     setUserInput({
  //       ...userInput,
  //       setEnteredTitle: event.target.value,
  //     });

  //     setUserInput((prevState) => {
  //       return { ...prevState, setEnteredTitle: event.target.value };
  //     });
  //   }

  //   function amountChangeHandler(event) {
  //     setUserInput({
  //       ...userInput,
  //       setEnteredAmount: event.target.value,
  //     });

  //     setUserInput((prevState) => {
  //       return { ...prevState, setEnteredAmount: event.target.value };
  //     });
  //   }

  //   function dateChangeHandler(event) {
  //     setUserInput({
  //       ...userInput,
  //       setEnteredDate: event.target.value,
  //     });

  //     setUserInput((prevState) => {
  //       return { ...prevState, setEnteredDate: event.target.value };
  //     });
  //   }

  function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  return (
    <div>
      <button
        className={!open === false ? "show" : ""}
        onClick={addExpenseHandler}
      >
        Add New Expense
      </button>

      {open && (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                onChange={titleChangeHandler}
                id="title"
                value={enteredTitle}
              />
            </div>
            <div className="new-expense__control">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                onChange={dateChangeHandler}
                id="date"
                min="2020-01-01"
                max="2023-12-31"
                value={enteredDate}
              />
            </div>
            <div className="new-expense__control">
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                onChange={amountChangeHandler}
                id="amount"
                min="0.01"
                step="0.01"
                value={enteredAmount}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button onClick={cancelHandler}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ExpenseForm;
