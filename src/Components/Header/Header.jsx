import React, { useContext, useState } from "react";
import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { PopupContext } from "../../Contexts/SignupContext";
import { UserContext } from "../../Contexts/UserContext";
import UserPopup from "../UserPopup/UserPopup";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { setSignupPopup } = useContext(PopupContext);
  const { user, signOutUser } = useContext(UserContext);
  const [showProfile, setShowProfile] = useState(false);  
  const navigate = useNavigate();
  const handleUser = ()=>{
    if (user) {
      navigate("/sell")
    } else {
      setSignupPopup(true)
    }
  }
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          {user ? (
            <>
              <img className="pr-pic" src={user.photoURL} alt="" />
              <span onClick={() => setShowProfile(!showProfile)}>
                <Arrow />
              </span>
              {showProfile && (
                <UserPopup
                  profileUrl={user.photoURL}
                  displayName={user.displayName}
                />
              )}
            </>
          ) : (
            <>
              <span onClick={() => setSignupPopup(true)}>Login</span>
              <hr />
            </>
          )}
        </div>
        <div onClick={() => handleUser()} className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
