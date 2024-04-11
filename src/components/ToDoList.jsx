import TodoItem from "./TodoItem";
import "../styles/todo-list.scss";
import { connect, useSelector } from "react-redux";

const ToDoList = ({ todos }) => {

  const darkMode = useSelector((state) => state.darkMode);

  return (
    <div className={`todo-list ${darkMode? 'dark-mode' : 'light-mode'} `}>
        {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
        ))}
        
    </div>
  );
};

const mapStateToProps = state => {
  const { todos, visibilityFilter } = state.todos;
  let filteredTodos = todos;
  if (visibilityFilter === 'ACTIVE') {
    filteredTodos = todos.filter(todo => !todo.isCompleted);
  } else if (visibilityFilter === 'COMPLETED') {
    filteredTodos = todos.filter(todo => todo.isCompleted);
  }
  return {
    todos: filteredTodos
  };
};



export default connect(mapStateToProps)(ToDoList);
