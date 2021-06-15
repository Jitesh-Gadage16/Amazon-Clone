import React,{useState} from "react";
import "./Login.css";
import { Link , useHistory} from 'react-router-dom';
import {auth} from './firebase'

const Login = () => {

   
  const history = useHistory();
  const [email, setEmail] = useState("")
  const [password , setpassword] = useState('')

  const signIn = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
        .then(auth => {
          history.push('/')
        })
    .catch(error => alert(error.messsage))

  }
  const Register = e =>{
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email,password)
    .then((auth) => {
      //if successfully created a new user with email and passward
      console.log(auth)
      if(auth) {
        history.push('/')
      }
    })
    .catch(error => alert(error.messsage))
  }

  return (
    <div className="Login">
    <Link to='/'>
      <div className="login__logo">
        <img
          src="https://i.ibb.co/hRVx9yt/download.png"
          alt="amezon-logo"
        ></img>
      </div>
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>Email</h5>
          {/* <input type="text" value={email} onChange={e => setEmail(e.targte.value)} /> */}
          <input type='text' value={email} onChange={e => setEmail(e.target.value)}>

          </input>

          <h5>Passward</h5>
          <input type="password" value={password} onChange={e => setpassword(e.target.value)}/>

          <button className="login__SignInButton" type='submit' onClick={signIn}>sign In</button>
        </form>
        <p>
          By Signing-in you agree to amezon's conditions of Use & sale. Please
          see Or Privacy Notice, Our Cookies Notice and our Intrest-Based Ads
        </p>
        <button className="login__RegisterButton" type='submit' onClick={Register}>
          Create Your Amezon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
