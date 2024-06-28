import { createSelector, createSlice } from "@reduxjs/toolkit";

export interface UserInput {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  submittedData: any[];

  isLoggedIn: boolean;
}

const initialState: UserInput = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  password: "",
  submittedData: JSON.parse(localStorage.getItem("submittedData") || "[]"),
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleChange: (state: any, action: any) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    handleSubmit: (state) => {
      const { firstName, lastName, phone, email, password } = state;

      if (!firstName || !lastName || !phone || !email || !password) {
        alert("Please fill in all fields.");
        return;
      }
      state.submittedData.push({
        firstName,
        lastName,
        phone,
        email,
        password,
      });

      localStorage.setItem(
        "submittedData",
        JSON.stringify(state.submittedData)
      );
      state.firstName = "";
      state.lastName = "";
      state.phone = "";
      state.email = "";
      state.password = "";
    },
    handleLogin: (state, payload) => {
      const { email, password } = state;
      console.log(email, password);

      
      

      // const nav = payload.payload;

      // const userMatch = submittedData.find(
      //   (user) => user.email === email && user.password === password
      // );
      // if (userMatch) {
      //   state.isLoggedIn = true;
      //   localStorage.setItem("user", JSON.stringify(userMatch));
      //   nav("/home");
      // } else {
      //   alert("Incorrect email or password.");
      // }
    },
    handleLogout: (state) => {
      state.isLoggedIn = false;
      localStorage.removeItem("user");
    },
  },
});

export const showTotalQuantity = createSelector(
  (state: { user: { cart: any } }) => state.user.cart,
  (cart: any[]) => cart.reduce((total, item) => total + item.quantity, 0)
);

export const { handleChange, handleSubmit, handleLogin, handleLogout } =
  userSlice.actions;

export default userSlice.reducer;
