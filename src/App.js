import TodoForm from './components/todoForm/TodoForm';
import TodoList from './components/todolist/TodoList';
import './App.css';
import { useState } from 'react';

const dummyData = [
  {
    id: 1,
    task: "Read 1-2 Pages of a Book"
  },
  {
    id: 2,
    task: "Pay the utility Bills"
  },
]

function App() {
  const [todos, setTodos] = useState(dummyData);

  const addTaskHandler = enteredTask => {
   setTodos(prevTodos => [ 
    {id: Math.round(Math.random() * 100),
    task: enteredTask},
    ...prevTodos
   ])
  }

  const deleteTodoHandler = todoId => {
   setTodos( prevTodos => { 
    const updatedTodos = prevTodos.filter(todo => todo.id !== todoId);
    return updatedTodos;
  })

  }
  let content = (
    <p style={{textAlign: 'center'}}>No Todo's , Maybe Add Some!</p>
  )
  if(todos.length > 0){
    content = (
    <TodoList todos={todos} deleteListItem={deleteTodoHandler}/>
    ) 
  }
  
  return (
    <div className='main-container'>
      <section>
       <TodoForm onAddGoal={addTaskHandler}/>
       {content}
       {/* <TodoList todos={todos} deleteListItem={deleteTodoHandler}/> */}
      </section>
    </div>
  );
}

export default App;
