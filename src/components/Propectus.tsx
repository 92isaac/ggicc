import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import { GlobalUseContext } from "../utils/Context";
import Dropdown from "../utils/Dropdown";
import { propectusList } from "../utils/data";

export const Propectus: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { toggle, handleChange } = GlobalUseContext();
  const dropdownRef = useRef<HTMLLIElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-[#72A407] flex justify-around items-center">
      <nav className="flex justify-center gap-6 items-center text-white">
        <ul
          className={`${
            toggle ? "block" : "hidden"
          } text-center md:flex justify-center items-center gap-16`}
        >
          {navlist.map((item) => (
            <li key={item.id} className="my-4" onClick={handleChange}>
              <NavLink to={item.path}>{item.title}</NavLink>
            </li>
          ))}

          <li className="mb-4 md:mb-0 relative cursor-pointer" onClick={toggleDropdown} ref={dropdownRef}>
            {" "}
            Propectus
            <AiFillCaretDown className="inline  text-gray-700 hover:text-gray-900 focus:outline-none focus:ring focus:ring-opacity-50" />
            {isOpen && (
              <Dropdown>
                {propectusList.map((item) => (
                  <p
                    className="text-[#72A407] py-3 cursor-pointer"
                    key={item.id}
                    onClick={() => {
                      navigate("/school/" + item.id);
                      handleChange();
                    }}
                  >
                    {item.title}
                  </p>
                ))}
              </Dropdown>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

const navlist = [
  {
    id: "1",
    title: "Home",
    path: "/",
  },
  {
    id: "2",
    title: "Practise Areas",
    path: "/",
  },
  {
    id: "3",
    title: "Book Online",
    path: "/book-online",
  },
  {
    id: "4",
    title: "Contact",
    path: "/",
  },
];
