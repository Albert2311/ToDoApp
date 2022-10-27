import React, { useContext } from 'react';
import '../CSS/Home.css';
import styled from 'styled-components'; 
import todoLogo from '../img/todoLogo.svg';
import logo from '../img/logo.svg';
import Menu from './Menu';
import MenuActive from './MenuActive'
import { AuthContext } from '../Auth';

const SlideMenu = (props) =>{
//inactive
    const{inactive,setInactive} = useContext(AuthContext);
    
// SignOut
    // const SignOut = ()=>{
    //     auth.signOut();
    // }
//div -- narbar
    const Container = styled.div`
    // background-color: #eee;
    // position: fixed;
    // left:0;
    // top:0;
    // bottom:0;
    // width: 16rem;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    text-align: center;
    `
    const ProfileImg = styled.img`
    width: 60px;
    background: ${({theme}) => theme.secondary};
    border: red;
    height: 60px;
    -moz-border-radius:75px;
    -webkit-border-radius: 75px;
    `
    const ProfileName = styled.h1`
    color: ${props => props.active ? props.theme.activeMenu : "#333"};
    font-size: 1rem;
    padding: 10px;
    font-weight: 3000;
    text-align: center;
    `

    return (
    <>
    <div className={`slide-menu ${inactive ? "inactive" : ""}`}>
        <div className='top-section'>
            <div className='logo'>
            {inactive ?   <img src={logo} alt="Todo"/> : <img src={todoLogo} alt="Todo"/> }
            </div>
            <div 
            onClick={() => {
                setInactive(!inactive)
                // localStorage.setItem("inactive", inactive)
            }} className='toggle-menu-btn'>
              {inactive ? <i className="bi bi-arrow-right-square-fill"></i>: <i className="bi bi-arrow-left-square-fill"></i> }
            </div>
        </div>
        <div className='divider'></div>
        { !inactive ? 
        <Container>
            <ProfileImg src="https://static1.dienanh.net/upload/202102/cf5af345-2cbd-4cce-bea8-cf659bd4a19b.jpg" alt=""/>
            <ProfileName>HELLO ADMIN</ProfileName>
            <Menu></Menu>
        </Container>
        : 
        <Container>
            <MenuActive></MenuActive>
        </Container>
        }
    </div>

    
     </>
    
  )
}

export default SlideMenu;
