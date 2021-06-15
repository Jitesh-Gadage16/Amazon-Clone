import React , {useEffect} from 'react'
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from './Payment';
import Footer from './Footer';
import {auth} from './firebase'
import {useStateValue} from './StateProvider'
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const promise = loadStripe('pk_test_51J1RqhSD46BMfV8F7aTrqE7EGJf3TJ0Ou2OWhsbh0FppAIpXis9uI5QsrAz5FnrnDS1CA5PaG2AedCw690LVWUmP00Wv53aMXe')


function App() {
  const [{} , dispatch] = useStateValue();

  useEffect( () => {   
    auth.onAuthStateChanged(authUser => {
      console.log("this user is", authUser)

      if(authUser){
        //the user just logged in  or the user was logged in
         dispatch({
           type: 'SET_USER',
           USER:authUser
         })
      }
      else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          USER:null
        })
      }
    })
   
  },[])



  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout /> {/* <Home /> */}
          </Route>
          <Route path="/payment">
              <Header />
             <Elements stripe={promise} >
             <Payment />
          </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
