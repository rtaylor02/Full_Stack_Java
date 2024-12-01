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
- props allows us to pass on dynamic data into our components in key-value format. In the case below, attributes (key) of our component is passed as props:
    ![props.png](readme_images/props.png)
    ![attributes.png](readme_images/attributes.png)
- To create an array of objects in JS:
    ![arrayOfObjects.png](readme_images/arrayOfObjects.png)
- Modularity is maintained via components: components inside a component.
- To loop around an array, you can use map() function. This works just like map() in Java Stream:
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
- To re-render a component on-the-fly every time an event happens, you need `useState` hook. Below is an example of using hook along with deconstructor operator `...`:  
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
    ```  
  ***NOTE***: `[todoRows, setTodoRows]` is deconstructored array definition. `[...todoRows, newTodo]` is using deconstructoring operator `...`.  
- 