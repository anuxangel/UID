// App.js
import React from "react";
import UserProfile from "./UserProfile";

const App = () => {
  const userData = {
    name: "Anjum I",
    age: 20,
    Education_Qualification: "Currently pursuring B tech IT.",
    DOB:"26-Feb-2004",
    Sex:"Female",
  }

  return (
    <div>
      <h1>User Profile Page</h1>
      <UserProfile 
        name={userData.name} 
        age={userData.age} 
        Education_Qualification={userData.Education_Qualification} 
        DOB={userData.DOB}
        Sex={userData.Sex}
       
      />
    </div>
  );
};

export default App;
