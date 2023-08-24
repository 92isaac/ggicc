import React from "react";
import { Link, useNavigate } from "react-router-dom";

export interface Props{
  title: string;
  image: string;
  path: string;
}


export const School: React.FC<Props> = ({title, image, path}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white">
      <div className="py-5 md:py-10">
        <h1 className="text-lg md:text-3xl"><Link to={path}>Admission to {title}</Link></h1>
      </div>

      <div className="flex flex-col-reverse md:flex md:flex-row md:justify-between items-center w-full">
        <ul className="md:w-1/2 md:pl-10">
          <li className="py-4">Graduate Studies</li>
          <li className="py-4">Diploma</li>
          <li className="py-4">Undergraduate Studies</li>
          <li className="py-4">Certificate Programs</li>
        </ul>
        <div className=" md:w-1/2">
          <img src={image} alt="school logo" className="w-full object-cover bg-white"/>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="block p-5" onClick={()=>navigate(-1)}>Go back</button>
      </div>
    </div>
  );
};
