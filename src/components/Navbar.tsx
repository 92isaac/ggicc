import React from "react";
import { FiMenu } from "react-icons/fi"
import { GlobalUseContext } from "../utils/Context";
import { Propectus } from "./Propectus";


export const Navbar: React.FC = () => {
  const { handleChange } = GlobalUseContext()
    return (
        <div className="bg-[#72A407] fixed w-full top-0 z-40">
        <nav className="bg-[#72A407] py-4 px-4 flex justify-between items-center">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="/company_logo-removebg-preview(2).webp"
                alt="Logo"
                className="h-14 w-14 md:h-20 md:w-20 mr-2"
              />
              <span className="text-sm text-white font-semibold md:text-lg">
                GREENS ON GARDINER IMMIGRATION CONSULTING CLINIC
              </span>
            </div>
            <div className="hidden md:block pl-4 text-white text-sm text-center">
              Professional. Trustworthy. Honest.
            </div>
          </div>
            <div className="md:hidden">
            <FiMenu className="text-2xl text-white transition-transform duration-300 ease-in-out" onClick={()=>{handleChange()}} />
          </div>
        </nav>
        <Propectus />
        </div>
      );
}
