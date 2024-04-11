import Heading from "./components/Heading"
import Input from "./components/Input"
import ToDoList from "./components/ToDoList"
import TodoInfo from "./components/TodoInfo"
import "./styles/app.scss"
import {useSelector} from "react-redux";

function App() {

  const  darkMode = useSelector((state) => state.darkMode);

  
  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
     <Heading />
     <Input />
     <ToDoList />
     <TodoInfo />
    </div>
  )
}

export default App
