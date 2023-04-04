import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { id: 'e1', title: 'Car mechanic', amount: 360.25, date: new Date(2021, 2, 28) },
    { id: 'e2', title: 'Bread', amount: 5.50, date: new Date(2020, 5, 12) },
    { id: 'e3', title: 'Paper', amount: 2.25, date: new Date(2021, 7, 1) },
    { id: 'e4', title: 'TV', amount: 2500.00, date: new Date(2020, 12, 6) }

  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
    </div>
  );
}

export default App;
