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
