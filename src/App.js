import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Hamburger",
    amount: 55.5,
    date: new Date(2020, 10, 12),
  },
  {
    id: "e2",
    title: "Pizza",
    amount: 70,
    date: new Date(2021, 0, 10),
  },
  {
    id: "e3",
    title: "Chicken",
    amount: 30.4,
    date: new Date(2019, 5, 23),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (addExpense) => {
    setExpenses((prevExpenses) => {
      return [addExpense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense addNewExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
