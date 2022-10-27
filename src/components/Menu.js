import React,{ useContext} from 'react'
import { AuthContext } from '../Auth';

import {NavLink} from 'react-router-dom';
import '../CSS/Home.css';

const Menu = () => {
  const {isActive, setIsActive } = useContext(AuthContext);
    

  return (
    <>
    <div className='narbar' id="narbar">
      <NavLink to="/home" onClick={() => {
        setIsActive("home")
        localStorage.setItem("isActive", "home")
    }}>
        <li className={`narbar-active ${isActive === "home" ? "active" : ""}`}>
          <span><i className="bi bi-house-door"></i></span>
          <h1>Home</h1>
        </li>
      </NavLink>

      <NavLink to='/todo' onClick={() => {setIsActive("todo")
        localStorage.setItem("isActive", "todo")}}>
        <li className={`narbar-active ${isActive === "todo" ? "active" : ""}`}>
          <span><i className="bi bi-list-task"></i></span>
          <h1>Todo</h1>
        </li>
      </NavLink>

      <NavLink to='/timeline' onClick={() => {setIsActive("timeline")
        localStorage.setItem("isActive", "timeline")}}>
        <li className={`narbar-active ${isActive === "timeline" ? "active" : ""}`}>
          <span><i className="bi bi-calendar2-range"></i></span>
          <h1>TimeLine</h1>
        </li>
      </NavLink>

      <NavLink to='/about' onClick={() => {setIsActive("about")
        localStorage.setItem("isActive", "about")}}>
        <li  className={`narbar-active ${isActive === "about" ? "active" : ""}`}>
          <span><i className="bi bi-person"></i></span>
          <h1>About</h1>
        </li>
      </NavLink>
  </div>
    </>
  )
}



export default Menu