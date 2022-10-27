import React from "react";
import todoLogo from './img/todoLogo.svg';
// import { withRouter } from "react-router-dom";
import  auth  from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import LordandSavior from "./LordandSavior";

const paperStyle={padding:20,height: '70vh',width: 500,margin:'15px auto'};

const SignUp = () => {
    const handleSignUp = (async event =>{
        event.preventDefault();
        const {email, password} = event.target.elements;
        try {
            await 
                
                createUserWithEmailAndPassword(auth,email.value, password.value);
                // history.push("/");
        }   catch (error){
            alert(error);
        }
    });
    return (
        <LordandSavior>
 <form onSubmit={handleSignUp}>
      <section className="login" style={paperStyle}>

        <div className="loginContainer">
          <div className="img"> <img src={todoLogo} alt="" />       {/*} phai co alt=""*/}
          </div>
            {/*user*/}
              <label className="gradient-text">Email</label>
              <input 
                type="email" 
                required 
                name = "email"
                placeholder='Email'
                >
              </input>
              {/**?email */}
              <label className="gradient-text">Password</label>
              <input 
                type="password" 
                required 
                name = "password"
                placeholder='Password'
                >
              </input> 
                <div className="btnContainer">
                  <button type="submit" >Sign Up</button>
                    <p>Have an account ?
                      <a href ="/login"><span>Sign in</span></a>
                    </p>
                </div>
        </div>
      </section>
    </form>
        </LordandSavior>
       
    );
};

export default SignUp;