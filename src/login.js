import React, { useContext } from 'react';
import { Navigate} from 'react-router-dom';
import auth from './firebase';
import { AuthContext } from './Auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './CSS/login.css';
import './CSS/App.css';
import todoLogo from './img/todoLogo.svg';
import LordAndSavior from './LordandSavior';

const paperStyle={padding:20,height: '70vh',width: 500,margin:'15px auto'};

const Login=() => {

  
  // eslint-disable-next-line no-unused-vars
  const {isLogged, setIsLogged} = useContext(AuthContext);

    const handleLogin = ( async event => {
        event.preventDefault();
        const {email,password} = event.target.elements;
        try {
          await 
          
          signInWithEmailAndPassword(auth,email.value, password.value);
          localStorage.setItem("isLogged", true)
          setIsLogged(localStorage.getItem("isLogged"))
          // history.push("/");
            }
            catch (error){
            alert(error);
          }
        });

        const {currentUser} = useContext(AuthContext);
          if (currentUser){
            console.log(currentUser);
            return <Navigate to="/home"/>;
            // auth.signOut();
            // localStorage.setItem("isLogged", false)
          }
    
    
    return ( 
<LordAndSavior>
<form onSubmit={handleLogin}>
      <section className="login" style={paperStyle}>

        <div className="loginContainer">
          <div className="img"> <img src={todoLogo} alt="" />       {/*} phai co alt=""*/}
          </div>
            {/*email*/}
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
                  <button type="submit" >Login</button>
                    <p>Don't have an account ?
                     <a href="/signup"><span>Sign up</span></a>
                    </p>
                </div>
        </div>
      </section>
    </form>
</LordAndSavior>
   
  );
};

export default Login;