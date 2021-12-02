import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      title: "Hamburger",
      amount: 55.5,
      date: new Date(2020, 10, 12),
    },
    {
      title: "Pizza",
      amount: 70,
      date: new Date(2021, 0, 10),
    },
  ];

  const addExpenseHandler = (addExpense) => {
    console.log(addExpense);
  };

  return (
    <div>
      <NewExpense addNewExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
