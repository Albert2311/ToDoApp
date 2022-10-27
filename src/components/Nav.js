import React, { useContext } from 'react'
import styled from 'styled-components';
import ava from '../img/ava.jpg';
import { AuthContext } from '../Auth';
import auth from '../firebase';

const Avatar = styled.div`
  /* margin-left: 60px; */
  float: right;
  right:10px;
  display:flex ;
  position: absolute;
  padding: 1rem;
  justify-content: flex-end;
  align-items: center;
  z-index:1000; 
`
const ProfileImg = styled.img`
  height: 2rem;
  margin: 0 1rem;
  cursor: pointer;
  width: 2rem;
  -moz-border-radius:75px;
  -webkit-border-radius: 75px;
  z-index:1000; 
`
const MessageIcon = styled.span`
  color: #2bb2e2;
  font-size: 27px;
  cursor : pointer ;
  margin-right: 3px;
  z-index:1000; 
`
const Text = styled.p`
  color: #2bb2e2;
  margin-bottom:0;
  z-index:1000; 
`
const Nav = () => {

  const {isLogged, setIsLogged} = useContext(AuthContext);

  // SignOut
  const SignOut = ()=>{
    auth.signOut();
    setIsLogged(false)
}
  return (
    <>
    <Avatar>
      <ProfileImg src={ava} alt=""/>
      <MessageIcon className='iconify' data-inline="false" data-icon="la:sign-out-alt"/>
      <a href="/login"><span onClick={() => {
        localStorage.clear("isActive");

        SignOut()
      }} type="submit"><Text>SignOut</Text></span></a>
    </Avatar>
      </>
  )
}

export default Nav;