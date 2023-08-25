import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { GlobalUseContext } from "./Context";
import { Footer } from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SharedLayout: React.FC = () => {
  const { handleDropDown } = GlobalUseContext();
  return (
    <section onClick={() => handleDropDown()}>
      <Navbar />
      <Outlet />
      <ToastContainer />
      <Footer />
    </section>
  );
};
