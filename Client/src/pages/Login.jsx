import axios from "axios";
import { useState } from "react";
import UserPage from "./UserPage";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  //   const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/login`,
      formData
    );
    console.log(formData.email, "Login successfully");
    console.log(res.data);
    // setUserData(res.data);
    navigate("/user", { state: res.data });
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="email"
          placeholder="email"
          onChange={changeHandler}
          value={formData.email}
          name="email"
        />
        <input
          type="password"
          placeholder="password"
          onChange={changeHandler}
          value={formData.password}
          name="password"
        />
        <button>Login</button>
      </form>
      <h1>New user</h1>
      <Link to="/">Sing-up</Link>
    </>
  );
};

export default Login;
