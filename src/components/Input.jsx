import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import '../styles/input.scss';
import { addTodo } from '../todoSlice';

const Input = () => {

  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);
  const [todoText, setTodoText] = useState('');


  console.log("dark Mode state is :" + darkMode);
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(todoText.trim() === ''){
      return;
    }

    dispatch(addTodo(todoText));
    setTodoText('');
  }

  const handleChange = (e) =>{
    setTodoText(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit} className={darkMode ? 'dark-mode' : 'light-mode'}>
        <button type='submit'></button>
        <input type="text" name="todo" placeholder='Create a new todo' value={todoText} onChange={handleChange}/>
    </form>
  )
}

export default Input;