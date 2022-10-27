import React, { useContext, useState } from "react";
import todoLogo from './img/todoLogo.svg';
// import { withRouter } from "react-router-dom";
import  auth  from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import LordandSavior from "./LordandSavior";
import { AuthContext } from "./Auth";
import { Navigate} from 'react-router-dom';

const paperStyle={padding:20,height: '70vh',width: 500,margin:'15px auto'};

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const {isLogged, setIsLogged} = useContext(AuthContext)

    const handleSignUp = async () =>{
        
        try {
            await createUserWithEmailAndPassword(auth,email, password);
            localStorage.setItem("isLogged", true)
            setIsLogged(localStorage.getItem("isLogged"))
        }   catch (error){
            alert(error);
        }
    }
    const {currentUser} = useContext(AuthContext);
          if (currentUser){
            console.log(currentUser);
            return <Navigate to="/home"/>;
            // localStorage.setItem("isLogged", false)
          }
    return (
        <LordandSavior>
 <div>
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
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
                >
              </input>
              {/**?email */}
              <label className="gradient-text">Password</label>
              <input 
                type="password" 
                required 
                name = "password"
                placeholder='Password'
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
                >
              </input> 
                <div className="btnContainer">
                  <button onClick={handleSignUp}>Sign Up</button>
                    <p>Have an account ?
                      <a href ="/login"><span>Sign in</span></a>
                    </p>
                </div>
        </div>
      </section>
    </div>
        </LordandSavior>
       
    );
};

export default SignUp;