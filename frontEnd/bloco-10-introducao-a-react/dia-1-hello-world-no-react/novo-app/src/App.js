import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const items = ['arroz', 'feijão', 'carne', 'farinha', 'água'];

function App() {
  return (
   <li>{items.map((item) => Task(item))} </li>
  );
}

export default App;
