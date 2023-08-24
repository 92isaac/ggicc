import React from "react";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-white py-5">
      <div className="flex justify-center gap-5 items-center">
        <Link to="https://www.youtube.com/channel/UCt6hVwN8TmAt0cQ8lUEy-MQ" className="block">
          <IoLogoYoutube />
        </Link>
        <Link to="https://wa.me/+1(639)382-9422" className="block">
          <FaWhatsapp />
        </Link>
        <Link to="https://web.facebook.com/GGICCS?_rdc=1&_rdr" className="block">
          <FaFacebook />
        </Link>
        <Link to="https://www.instagram.com/greensongardinersimmigration/" className="block">
          <FaInstagram />
        </Link>
      </div>
      <p className="text-center">
        Phone:{" "}
        <span>
          <Link to="tel:+1(639)382-9422">+1(639)382-9422</Link>
        </span>{" "}
        <span>or </span> 
        <span>
          <Link to="tel:639-382-9422">639-382-9422</Link>
        </span>
      </p>
      <p className="text-center"><Link to="mailto:info@ggicc.ca">info@ggicc.ca</Link></p>
      <h1 className="text-center" >&copy; {year} by GREENS ON GARDINER IMMIGRATION CONSULTING CLINIC</h1>
    </footer>
  );
};
