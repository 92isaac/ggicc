import React from 'react'
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const MarqSlider:React.FC = () => {
  return (
    <div>
        <Marquee autoFill={true} pauseOnHover={true}>
            {marqdata.map((item)=>(
                <div key={item.id} className=' w-36 md:w-60'>
                    <Link to={item.path}>
                    <img src={item.image} alt="" className='object-cover w-full px-4' />
                    </Link>
                </div>
            ))}
        </Marquee>
    </div>
  )
}

export default MarqSlider


const marqdata =[
    {
        id:'1',
        image:"/regina.png",
        path: "https://www.uregina.ca/",

    }, 
    {
        id:'2',
        image: "/Saskatchewan.png",
    path: "https://saskpolytech.ca/programs-and-courses/international/programs.aspx",
    
    }, 
    {
        id:'3',
        image: "/luther.png",
        path:"https://www.luthercollege.edu/high-school",
    }, 
    {
        id:'4',
        image: "/una.PNG",
    path: "https://www.unb.ca/",
        
    }, 
]