import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/component/navbar";

export default function MainAppLayout(props: any) {
  return (
    <div>
     <Navbar/>
      <Outlet />
    </div>
  );
}
