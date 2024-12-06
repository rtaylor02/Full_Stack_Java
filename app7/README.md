# Introduction
This is my own version of course from Chad Darby on Udemy: [Build a Full Stack App - React and Java Spring Boot, Stripe Credit Card Payments, Spring Security, JWT, Spring Data JPA](https://ba.udemy.com/course/full-stack-react-and-java-spring-boot-the-developer-guide/learn/lecture/33402256#overview).

# Important Points
## React
- Key terms:
    ![key_terms.png](readme_images/key_terms.png)
    
- How React works:
    ![how_react_works.png](readme_images/how_react_works.png)

- JSX allows us to write HTML in React components (declared in a 'function'):
    ![jsx.png](readme_images/jsx.png)

- Some basic CLI commands:
  - `npx create-react-app <app_name>` ==> create React app in the folder with the name of <app_name>.
  - `npm start` ==> run react app
  - `set PORT=5100 && npm start` ==> server listens on http://localhost:5100

- To add Bootstrap into our React app, simply follow the steps in [Quickstart](https://getbootstrap.com/docs/5.3/getting-started/introduction/):
  1. index.html: add inside <head>: 
     ```
     <meta name="viewport" content="width=device-width, initial-scale=1">
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
     ```
  2. index.html: add at end of <body>:
     ```
     <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
     ```
- In any .js function definition, you can only return 1 element. Tip: wrap multi-level element in 1 `<div>`.

- `export default <function_name>` enables us to use the component within our project scope.

- use {...} to evaluate JavaScript inside html elements:
    ![evaluateJS.png](readme_images/evaluateJS.png)

- props ==> allows us to pass on dynamic data into our components in key-value format. In the case below, attributes (key) of our component is passed as props:
    ![props.png](readme_images/props.png)
    ![attributes.png](readme_images/attributes.png)

- To create an array of objects in JS:
    ![arrayOfObjects.png](readme_images/arrayOfObjects.png)

- Modularity is maintained via components: components inside a component.

- To loop around an array, you can use `map()` function. This works just like map() in Java Stream:
    ![img.png](img.png)

- onClick event listener takes (a pointer to) a lambda (arrow function):  
    `<button onClick={() => console.log('click!')}>Add todo item</button>`  
    or  
    ```
    const addTodo = () => {
      if (todoRows.length > 0) {
        const newTodo = {rowNumber: (todoRows.length + 1), rowDescription: 'New todo', rowAssigned: 'user'}
        todoRows.push(newTodo);
        console.log(todoRows)
      }
    }
    ...
    <button onClick={addTodo}>Add todo item</button>
    ```  
  ***NOTE:*** `onclick={addTodo}`, not addTodo(), as this would trigger the function at rendering the button.

- `useState` ==> a React hook to re-render a component on-the-fly every time an event happens. Below is an example of using hook along with deconstructor operator `...`:  
    ```
    import React, {useState} from 'react';
    ...
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
    ...
    <button onClick={addTodo}>Add todo item</button>
    ```  
  ***NOTE***: `[todoRows, setTodoRows]` is deconstructed array definition. `[...todoRows, newTodo]` is using deconstruction operator `...`.  
  ***NOTE***: useState is an alias to a function that takes initial value and an update function, almost like reduce(T id, Bin.Op accu) in Java Stream.

- onChange event handler can be assigned to an input or textarea element to handle user's input:
    ```
    function NewTodoForm() {
      const assignedChange = event => {
        console.log('assigned: ', event.target.value); 
      }
    ...
        <div className="mb-3">
            <label className="form-label">Assigned</label>
            <input type="text" className="form-control" required onChange={assignedChange}></input>
        </div>
    ...
    }
    ```  
    ***NOTE***: `event.target.value` is used to capture the input typed into the text.  
    You can use arrow function in onChange() arg to make your code shorter:
    ```
    <input type="text" onChange={event => console.log('assigned: ', event.target.value)}></input>
    ```  
    Combining it with useState:
    ```
    import React, {useState} from "react";
    ...
    function NewTodoForm() {
        const [assigned, setAssigned] = useState('');
        const [desc, setDesc] = useState('');
        ...
        <input type="text" className="form-control" required onChange={event => { setAssigned(event.target.value); console.log("assigned = " + assigned);}} value={assigned}></input>
        ...
        <textarea className="form-control" rows={3} required onChange={event => setDesc(event.target.value)} value={desc}></textarea>
    }
    ```  
- Complete code so far foo `useState`: 
  App.js:
  ```
  import React, {useState} from 'react';
  import './App.css';
  import TodoTable from './components/TodoTable';
  import NewTodoForm from './components/NewTodoForm';

  function App() {

    const [todoRows, setTodoRows] = useState([
      {rowNumber: 1, rowDescription: 'Feed dog', rowAssigned: 'Eric'}, 
      {rowNumber: 2, rowDescription: 'Walk dog', rowAssigned: 'Eric'}, 
      {rowNumber: 3, rowDescription: 'Play dog', rowAssigned: 'Mendez'}, 
      {rowNumber: 4, rowDescription: 'Charge car', rowAssigned: 'Skibidi Toilet'}, 
    ])

    const addTodo = (description, assigned) => {
      if (todoRows.length > 0) {
        const newTodo = {rowNumber: (todoRows.length + 1), rowDescription: description, rowAssigned: assigned}
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
              <NewTodoForm addTodo={addTodo} />
          </div>

        </div>
      </div>
    );
  }

  export default App;
  ```  

  NewTodoForm:  
  ```
  import React, {useState} from "react";

  function NewTodoForm(props) {
      const [assigned, setAssigned] = useState('');
      const [desc, setDesc] = useState('');

      const submitTodo = () => {
          if (assigned !== '' && desc !== '') {
              props.addTodo(desc, assigned);
              setAssigned('')
              setDesc('')
          }
      }

      return (
          <div className="mt-5">
              <form>
                  <div className="mb-3">
                      <label className="form-label">Assigned</label>
                      <input type="text" className="form-control" required onChange={event => { setAssigned(event.target.value) }} value={assigned}></input>
                  </div>
                  <div className="mb-3">
                      <label className="form-label">Description</label>
                      <textarea className="form-control" rows={3} required onChange={event => setDesc(event.target.value)} value={desc}></textarea>
                  </div>
                  <button type="button" className="btn btn-primary mt-3" onClick={submitTodo}>Add Todo</button>
              </form>
          </div>
      )
  }

  export default NewTodoForm;
  ```  

- 