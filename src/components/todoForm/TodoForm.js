import { useState } from "react";
import "./TodoForm.css";

const TodoForm = (props) => {

  const [enteredValue, setEnteredValue] = useState('');

  const TaskFormHandler = (e) => {
    e.preventDefault();
    props.onAddGoal(enteredValue);


    setEnteredValue('');
  };

  const TaskChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  return (
    <form className="todo-form" onSubmit={TaskFormHandler}>
      <div className="todo-form-inner">
        <label>Todo Name</label>
        <input type="text" value={enteredValue} onChange={TaskChangeHandler}/>
      </div>
      <button>Add Task</button>
    </form>
  );
};

export default TodoForm;
