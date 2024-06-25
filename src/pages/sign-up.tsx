import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleChange, handleSubmit } from "../store/userSlice/index";
import { RootState } from "../store";

const SignUp = () => {
  const dispatch = useDispatch();
  const userSlice = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(handleChange({ name, value } as any));
  };
  const handleClick = () => {
    try {
      dispatch(handleSubmit(navigate("/")));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mainContainer">
      <div className="signUp">
        <h1 className="h1_signin">Sign Up</h1>
        <div className="inputField">
          <label htmlFor="firstName">First Name</label>
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            autoComplete="off"
            value={userSlice.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputField">
          <label htmlFor="lastName">Last Name</label>
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            autoComplete="off"
            value={userSlice.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputField">
          <label htmlFor="phone">Phone</label>
          <input
            name="phone"
            type="text"
            placeholder="Phone"
            autoComplete="off"
            value={userSlice.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputField">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            autoComplete="off"
            value={userSlice.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputField">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={userSlice.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputField">
          <button type="submit" className="signBtn" onClick={handleClick}>
            Sign Up
          </button>
        </div>
        <div className="Signin">
          <Link to="/">
            <p>Log In</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
