import TodoItem from "../todoitem/TodoItem";

const TodoList = (props) => {
  return (
    <ul className="todo-list">
      {props.todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} onDelete={props.deleteListItem}>
          {todo.task}
        </TodoItem>
      ))}
    </ul>
  );
};

export default TodoList;
