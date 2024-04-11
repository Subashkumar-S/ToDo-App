import sun from "../assets/icon-sun.svg";
import moon from "../assets/icon-moon.svg"
import { toggleDarkMode } from "../darkModeSlice";
import "../styles/heading.scss";
import {useDispatch, useSelector} from 'react-redux';

const Heading = () => {

  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  }
 
  return (
    <div className="heading">
        <h1>Todo</h1>
        <button onClick={handleToggleDarkMode}>
            <img src={darkMode? sun : moon} alt="sun" />
        </button>
    </div>
  )
}

export default Heading