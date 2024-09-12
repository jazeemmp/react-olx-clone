import React, { useContext } from "react";
import "./UserPopup.css";
import { UserContext } from "../../Contexts/UserContext";
const UserPopup = ({ profileUrl, displayName }) => {
    const {signOutUser } = useContext(UserContext);
  return (
    <div className="user-popup">
      <div className="top">
        <img src={profileUrl} alt="" />
        <h3>{displayName}</h3>
      </div>
      <div className="middle">
        <button>View and edit profile</button>
        <hr />
        <div className="logout">
          <i className="fas fa-sign-out"></i>
          <p onClick={signOutUser}>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default UserPopup;
