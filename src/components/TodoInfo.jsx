import { useState, useEffect } from "react";
import {connect,useDispatch, useSelector} from "react-redux"
import "../styles/todo-info.scss";
import { deleteCompletedTasks, setVisibilityFilter } from "../todoSlice"; 
import { VisibilityFilters  } from '../todoSlice'; 


const TodoInfo = ({incompleteTasksCount}) => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const activeState = useSelector((state) => state.todos.visibilityFilter);
  const darkMode = useSelector((state) => state.darkMode);

  console.log(activeState);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const handleSetVisibilityFilter = (filter) => {
    dispatch(setVisibilityFilter(filter)); 
  };

  const handleClearCompleted = () =>{
    dispatch(deleteCompletedTasks());
  }

  if (windowWidth > 620) {
    return (

      <div className={`todo-info ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <p>{incompleteTasksCount} items left</p>
        <ul>
          <li><a href="#" className={`${activeState === 'ALL' ? 'active' : ''} ${darkMode ? 'dark-mode' : 'light-mode'}`} onClick={() => handleSetVisibilityFilter(VisibilityFilters.ALL)}>All</a></li>
          <li><a href="#" className={`${activeState === 'ACTIVE' ? 'active' : ''} ${darkMode ? 'dark-mode' : 'light-mode'}`} onClick={() => handleSetVisibilityFilter(VisibilityFilters.ACTIVE)}>Active</a></li>
          <li><a href="#" className={`${activeState === 'COMPLETED' ? 'active' : ''} ${darkMode ? 'dark-mode' : 'light-mode'}`} onClick={() => handleSetVisibilityFilter(VisibilityFilters.COMPLETED)}>Completed</a></li>
        </ul>
        <button onClick={handleClearCompleted}>Clear Completed</button>
      </div>
    )
  }
  return (
    <>
      <div className="todo-info">
        <p>{incompleteTasksCount} items left</p>
        <button onClick={handleClearCompleted}>Clear Completed</button>
      </div>
      <div className="toggle-menu">
      <ul>
          <li><a href="#" className={`${activeState === 'ALL' ? 'active' : ''}`} onClick={() => handleSetVisibilityFilter(VisibilityFilters.ALL)}>All</a></li>
          <li><a href="#" className={`${activeState === 'ACTIVE' ? 'active' : ''}`} onClick={() => handleSetVisibilityFilter(VisibilityFilters.ACTIVE)}>Active</a></li>
          <li><a href="#" className={`${activeState === 'COMPLETED' ? 'active' : ''}`} onClick={() => handleSetVisibilityFilter(VisibilityFilters.COMPLETED)}>Completed</a></li>
        </ul>
      </div>
    </>
  )

}
const mapStateToProps = state => {
  const incompleteTasks = state.todos.todos.filter(todo => !todo.isCompleted);
  return {
    incompleteTasksCount: incompleteTasks.length
  };
};

export default connect(mapStateToProps)(TodoInfo);
