import './TodoItem.css'

const TodoItem = (props) => {
  const deleteItemHandler = () => {
    
    props.onDelete(props.id);
  }
  
  return (
    <li className='todo-item' onClick={deleteItemHandler}>
        <p>{props.children}</p>
    </li>
  )
}

export default TodoItem;
