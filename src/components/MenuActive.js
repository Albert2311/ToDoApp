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
        <li className={`narbar-active-close ${isActive === "home" ? "active" : ""}`}>
          <span><i class="bi bi-house-door"></i></span>
        </li>
      </NavLink>

      <NavLink to='/todo' onClick={() => {setIsActive("todo")
        localStorage.setItem("isActive", "todo")}}>
        <li className={`narbar-active-close ${isActive === "todo" ? "active" : ""}`}>
          <span><i class="bi bi-list-task"></i></span>
        </li>
      </NavLink>

      <NavLink to='/timeline' onClick={() => {setIsActive("timeline")
        localStorage.setItem("isActive", "timeline")}}>
        <li className={`narbar-active-close ${isActive === "timeline" ? "active" : ""}`}>
          <span><i class="bi bi-calendar2-range"></i></span>
        </li>
      </NavLink>

      <NavLink to='/about' onClick={() => {setIsActive("about")
        localStorage.setItem("isActive", "about")}}>
        <li  className={`narbar-active-close ${isActive === "about" ? "active" : ""}`}>
          <span><i class="bi bi-person"></i></span>
        </li>
      </NavLink>
  </div>
    </>
  )
}



export default Menu