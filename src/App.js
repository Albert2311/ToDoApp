
import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login';
import Home from "./components/Home/Home";
import SignUp from './SignUp';
import { AuthContext, AuthProvider } from './Auth';
import About from './components/About/About';
import Todo from './components/Todo/Todo';
import TimeLine from './components/TimeLine/TimeLine';
import SlideMenu from './components/SlideMenu';
import Nav from './components/Nav';

const App =()=> {  

  const { isLogged  } = useContext(AuthContext);

  return (
    <div   className="App">
       
      <BrowserRouter>
      
      {isLogged && <SlideMenu/>}
      {isLogged && <Nav/>}
      {/* <Nav/> */}
                <Routes>
                  <Route path='/' exact element={<Login/>}/>
                  <Route path='/home' element={<Home/>}/>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/signup' element={<SignUp/>}/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/todo' element={<Todo/>}/>
                  <Route path='/timeline' element={<TimeLine/>}/>
                </Routes>
      </BrowserRouter> 
            </div>
  );
};

export default App;
