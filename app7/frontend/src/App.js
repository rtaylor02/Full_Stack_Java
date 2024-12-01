import React, {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';

function App() {

  const [todoRows, setTodoRows] = useState([
    {rowNumber: 1, rowDescription: 'Feed dog', rowAssigned: 'Eric'}, 
    {rowNumber: 2, rowDescription: 'Walk dog', rowAssigned: 'Eric'}, 
    {rowNumber: 3, rowDescription: 'Play dog', rowAssigned: 'Mendez'}, 
    {rowNumber: 4, rowDescription: 'Charge car', rowAssigned: 'Skibidi Toilet'}, 
  ])

  const addTodo = () => {
    if (todoRows.length > 0) {
      const newTodo = {rowNumber: (todoRows.length + 1), rowDescription: 'New todo', rowAssigned: 'user'}
      setTodoRows(todoRows => [...todoRows, newTodo])
    }
  }

  return (
    <div className="mt-5 container">
      <div className='card'>
        <div className='card-header'>Your todo's</div>
        <div className='card-body'>
            <TodoTable todos={todoRows}/>
            <button className="btn btn-primary" onClick={addTodo}>Add todo item</button>
        </div>

      </div>
    </div>
  );
}

export default App;
