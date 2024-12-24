import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // const apiUrl = import.meta.env.VITE_BACKEND_URL;
  // console.log(apiUrl); // This will print: "http://localhost:5000"

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/user`,
        formData
      );
      console.log("Data posted successfully", res.data);
      navigate("/login");
    } catch (error) {
      console.log("Error occured", error);
    }
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <h1>Sign up page</h1>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={changeHandler}
          value={formData.username}
        />
        <input
          type="email"
          name="email"
          placeholder="E-Mail"
          onChange={changeHandler}
          value={formData.email}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={changeHandler}
          value={formData.password}
        />
        <input type="submit" />
      </form>
      <h1>Already have an account</h1>
      <Link to="/login">Login</Link>
    </>
  );
};

export default Home;
