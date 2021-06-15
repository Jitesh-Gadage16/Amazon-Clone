import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { Link } from 'react-router-dom';
import {useStateValue} from './StateProvider'
import Login from './Login'
import {auth} from './firebase'


function Header() {
  const [{basket,user} , dispatch] = useStateValue();
   
  const handleAuthentication= () => {
    if(user){
        auth.signOut(); 
    }
  }

  return (
    <div className="header">
    <Link to="/">
      <img
        className="header__logo"
        src="https://i.ibb.co/QYQcZXQ/amazon-PNG25.png"
        alt="amezon-logo"
        border="0"
      ></img>
      </Link>
       
       <div className="header__optionLocation">
       <LocationOnOutlinedIcon className="header__locationIcon"></LocationOnOutlinedIcon>
           <div className="header__options">
          <span className="header__optionLineOne">Hello</span>
          <span className="header__optionLineTwo">Select your address</span>
          </div>
        </div>

      <div className="header__search">
        <input className="header__searchInput"></input>
        <SearchIcon className="header__searchIcon"></SearchIcon>
      </div>

      <div className="header__nav">
      <Link to={!user && '/Login'}>
      <div className="header__options" onClick={handleAuthentication}>
      
          <span className="header__optionLineOne">Hello {!user ? 'Guest' :user.email}</span>
          <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
       
      </div>
        </Link>


        <div className="header__options">
          <span className="header__optionLineOne">Return</span>
          <span className="header__optionLineTwo" >& Orders</span>
        </div>

        <Link to="/Checkout">
        <div className="header__optionBasket">
        <ShoppingCartOutlinedIcon>
        </ShoppingCartOutlinedIcon>
        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
