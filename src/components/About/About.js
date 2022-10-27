import React from 'react'
import '../../CSS/About.css';
import ava from '../../img/ava.jpg';
import styled from 'styled-components';

const Container = styled.div`
  background-color: black;
`
const About = () => {
  return (
    <>
    <div className='main'>


    <div class="wrapper">
      <div class="left">
        <img src="https://i.pinimg.com/564x/24/e9/c3/24e9c3cee94adf04d576f7745d16a359.jpg" 
        alt="user" width="100"/>
        <h4>Phạm Nguyệt Anh</h4>
         <p>IT Employees</p>
    </div>
    <div class="right">
        <div class="info">
            <h3>Information</h3>
            <div class="info_data">
                 <div class="data">
                   <h5>Student ID</h5>
                    <p>46.01.104.005</p>
                  </div>
                 <div class="data">
                    <h5>Email</h5>
                    <p>nguyetanh.23112002@gmail.com</p>
                 </div>
                  <div class="data">
                    <h5>Phone Number</h5>
                    <p>0965 479 331</p>
                 </div>
            </div>
        </div>
      
      <div class="projects">
            <h3>Class</h3>
            <div class="projects_data">
                 <div class="data">
                    <h5>Class</h5>
                    <p>K46.CNTT.A</p>
                 </div>
                 <div class="data">
                   <h5>Class ID</h5>
                    <p>2211COMP1031</p>
              </div>
            </div>
        </div>
      
        <div class="social_media">
            <ul>
              <li><a href="https://www.facebook.com/NguyetAnh231"><i class="bi bi-facebook"></i></a></li>
              <li><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"><i class="bi bi-envelope-check"></i></a></li>
              <li><a href="https://www.instagram.com/phamnguyet_anh/"><i class="bi bi-instagram"></i></a></li>
          </ul>
      </div>
    </div>
  </div>

  </div>
    </>
  )
}

export default About