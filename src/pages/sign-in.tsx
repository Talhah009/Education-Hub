import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleChange, handleLogin } from "../store/userSlice/index";
import { RootState } from "../store";
import apiServices from "../services/requesthandler";
import { saveDataToLocalStorage } from "../utils/LocalStore.util";

const SignIn = () => {
  const dispatch = useDispatch();
  const userSlice = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(handleChange({ name, value } as any));
  };

  const handleLoginClick = async () => {
    try {
      const resp = await apiServices.postFromApi("/users/user-signin", {
        email: userSlice.email,
        password: userSlice.password,
      });
      if (resp.status === 201) {
        saveDataToLocalStorage("user", resp.status);
        saveDataToLocalStorage("token", resp.status);
        navigate("/homepage");
      } else {
        alert(
          resp?.error?.error ??
            resp?.error?.isEmail ??
            resp?.error?.isNotEmpty ??
            resp?.error?.message ??
            resp?.message ??
            "Internal Server Error: An error occured while submitting the request please try again later, of error occured again then try contact to our Support Team"
        );
      }

      // console.log(response);
    } catch (error) {
      console.log((error as Error).message);
    }
    // dispatch(handleLogin(navigate as any));
  };

  return (
    <div className="mainContainer">
      <div className="logIn">
        <h1 className="heading">Log In</h1>
        <div className="inputField">
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your Email"
            autoComplete="off"
            value={userSlice.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputField">
          <label>Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={userSlice.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputField">
          <button type="button" className="loginBtn" onClick={handleLoginClick}>
            Log In
          </button>
        </div>
        <div className="create_acc">
          <Link to="/SignUp">
            <p>Create Account</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
