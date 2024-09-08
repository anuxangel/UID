// UserProfile.js
import React from "react";
import "./UserProfile.css";
const UserProfile = (props) => {
  const { name, age, Education_Qualification, DOB,Sex } = props;

  return (
    <div className="profile-card">
      <div className="profile-info">
      <p  className="profile-name"> Name :{name}</p>
      <p  className="profile-age"> Age: {age}</p>
      <p  className="profile-Educational_Qualification">Educational Qualification: {Education_Qualification}</p>
      <p  className="profile-DOB">DOB: {DOB}</p>
      <p  className="profile-Sex">Sex: {Sex}</p>
    </div>
    </div>
  );
};




export default UserProfile;
