// import axios from "axios";
// import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const UserPage = () => {
  const location = useLocation();
  const userData = location.state.data;
  // console.log(userData);

  return (
    <>
      <h1>This is the user page</h1>
      <h2>Username :{userData.username} </h2>
      <h2>Email : {userData.email}</h2>
      <Link to="/login">Log-out</Link>
    </>
  );
};

export default UserPage;
