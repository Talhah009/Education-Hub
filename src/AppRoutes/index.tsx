import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "../pages/home-page";
import SignIn from "../pages/sign-in";
import SignUp from "../pages/sign-up";
import Resources from "../pages/component/Resources";
import MainAppLayout from "./MainAppLayout";
import MyResources from "../pages/component/MyResources";
import SavedResources from "../pages/component/SavedResources";
import CustomCard from "../pages/component/detailResource";

const _MainAppRoutes = () => {
  const MainRoutes = {
    path: "/",
    element: <MainAppLayout />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },

      {
        path: "/Resources",
        element: <Resources />,
      },
      {
        path: "/MyResources",
        element: <MyResources />,
      },
      {
        path: "/SavedResources",
        element: <SavedResources />,
      },
      {
        path: "/DetailsResources/:id",
        element: (
          <CustomCard
            title={"HEY"}
            subtitle={""}
            description={""}
            isFavorite={false}
          />
        ),
      },
      {
        path: "*",
        element: <HomePage />,
      },
    ],
  };
  return MainRoutes;
};

const AuthenticationRoutes = () => {
  const PvtRoute = {
    path: "/",

    children: [
      {
        path: "/",
        element: <SignIn />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },

      {
        path: "*",
        element: <SignIn />,
      },
    ],
  };
  return PvtRoute;
};

export default function MainAppRoutes() {
  let pvt_routes = _MainAppRoutes();

  let auth_element = AuthenticationRoutes();

  let user = localStorage.getItem("user");

  // eslint-disable-next-line
  if (!user) return useRoutes([auth_element]);

  // eslint-disable-next-line
  return useRoutes([pvt_routes]);
}
