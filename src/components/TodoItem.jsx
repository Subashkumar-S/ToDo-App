import {useDispatch, useSelector} from "react-redux";
import "../styles/todo-item.scss";
import close from '../assets/icon-cross.svg';
import check from "../assets/icon-check.svg";
import { deleteTodo, toggleComplete } from "../todoSlice";

const TodoItem = ({todo}) => {
    const dispatch = useDispatch();
    const {id, task, isCompleted} = todo;
    const darkMode = useSelector((state) => state.darkMode);

    const handleToggleComplete = () =>{
        console.log("handleToggleComplete button is clicked");
        dispatch(toggleComplete(id));
    }
    
    const handleDeleteTodo = () => {
        dispatch(deleteTodo(id));
    }
    return (
        <div className={`todo-item ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <div>
                <button className="info-btn" onClick={handleToggleComplete}>
                    <img src={isCompleted ? check : ''} alt="" />
                </button>
                <p className={`${isCompleted ? 'completed' : ''}`}>{task}</p>
            </div>
            <button className="close-btn" onClick={handleDeleteTodo}>
                <img src={close} alt="close" />
            </button>
        </div>
    )
}

export default TodoItem