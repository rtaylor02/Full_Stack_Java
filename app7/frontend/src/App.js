import React, {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todoRows, setTodoRows] = useState([
    {rowNumber: 1, rowDescription: 'Feed dog', rowAssigned: 'Eric'}, 
    {rowNumber: 2, rowDescription: 'Walk dog', rowAssigned: 'Eric'}, 
    {rowNumber: 3, rowDescription: 'Play dog', rowAssigned: 'Mendez'}, 
    {rowNumber: 4, rowDescription: 'Charge car', rowAssigned: 'Skibidi Toilet'}, 
  ])

  const addTodo = (description, assigned) => {
    let nextRowNumber = 0;
    if (todoRows.length > 0) {
      nextRowNumber = todoRows[todoRows.length - 1].rowNumber + 1;

    } else {
      nextRowNumber = 1;
    }
    const newTodo = {rowNumber: nextRowNumber , rowDescription: description, rowAssigned: assigned}
    setTodoRows(todoRows => [...todoRows, newTodo])
  }

  const deleteTodo = (deleteRowNumber) => {
    let filtered = todoRows.filter(function (value) {
      return value.rowNumber !== deleteRowNumber;
    })
    setTodoRows(filtered);
  }

  return (
    <div className="mt-5 container">
      <div className='card'>
        <div className='card-header'>Your todo's</div>
        <div className='card-body'>
            <TodoTable todos={todoRows} deleteTodoFunc={deleteTodo}/>
            <button onClick={() => setShowAddTodoForm(!showAddTodoForm)} className="btn btn-primary">{showAddTodoForm ? 'Close New Todo' : 'New Todo'}</button>
            {showAddTodoForm && <NewTodoForm addTodo={addTodo} />}
        </div>

      </div>
    </div>
  );
}

export default App;
