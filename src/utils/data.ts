// import { GlobalUseContext } from "./Context";

interface DataType {
  id: string;
  title: string;
  path: string;
  image: string;
}

// const { oneHour, thirtyMinutes } = GlobalUseContext()


export const propectusList: DataType[] = [
  {
    id: "1",
    title: "Saskatchewan Polytechnic:",
    path: "https://saskpolytech.ca/programs-and-courses/international/programs.aspx",
    image: "/Saskatchewan.png",
  },
  {
    id: "2",
    title: "University of New Brunswick:",
    path: "https://www.unb.ca/",
    image: "/una.PNG",
  },
  {
    id: "3",
    title: "University of Regina:",
    path: "https://www.uregina.ca/",
    image: "/regina.png",
  },
  {
    id: "4",
    title: "Luther College High School:",
    path: "https://www.luthercollege.edu/high-school",
    image: "/luther.png",
  },
];


export const services =[
  {
      id:"30-minutes",
      time:"30Min",
      price: 100,
      image:'/11062b_d00559f81ba84b968b58859c3dbdf4aa~mv2_d_3762_2508_s_4_2.webp'
  },
  {
      id:"1-hrs",
      time:"1hr",
      price: 151,
      image:""
  },
]
