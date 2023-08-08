import React , { useState } from "react";
// import styled from 'styled-components';
import Button from "../../UI/Button/Button";
import styles from "./TodoForm.module.css";
// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   padding: 4rem 2rem;
//   width: 30rem;
//   max-width: 90%;
//   margin: 20px auto;
//   box-shadow: rgba(0, 0, 0 , 20%) 0px 7px 29px 0px;
// `;
// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label{
//     font-size: 1.2rem;
//     margin: 20px 0;
//     font-weight: 500;
//     color: ${props => (props.invalid ? 'red' : 'black')};
//   }

//   & input{
//     font-family: inherit;
//     width: 100%;
//     padding: 0.5rem;
//     margin: 10px 0;
//     background: ${props => (props.invalid ? '#ffd7d7' : 'rgb(207, 205, 205)')};
//     border: none;
//     outline: none;
//     color: #fff;
//     border-radius: 10px;
//     transition: background-color 0.3s ease-in-out;
//   }
//   & input:focus{
//     color: #000;
//   }
// `;
const TodoForm = (props) => {

  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const TaskChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    
    setEnteredValue(e.target.value);
  };


  const TaskFormHandler = (e) => {
    e.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
    setEnteredValue('');
  };
  
  return (
    <form className={styles['todo-form']} onSubmit={TaskFormHandler}>
      <div className={`${styles['form-control']} ${!isValid? styles['invalid'] : ''}`}>
        <label>Todo Name</label>
        <input type="text" value={enteredValue} onChange={TaskChangeHandler}/>
      </div>
      <Button type="submit">Add New Task</Button>
    </form>
  );
};

export default TodoForm;