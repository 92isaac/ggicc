/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState, createContext, useContext, ReactNode } from "react";

interface GlobalData {
  toggle: boolean;
  dropdown: boolean;
  selectedDate: Date | null;
  formdata:object,
  divRef: any;
  oneHour: number;
  thirtyMinutes: number;
  setFormData:any;
  handleChange: (nextChecked: boolean) => void;
  handleDropDown: (nextChecked: boolean) => void;
  handleClick:()=> void;
  handleDateChange: (date: Date | null) => void;

}



export const AppContext = createContext<GlobalData | null | any >(null);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [toggle, setToggle] = useState(false);
  const [formdata, setFormData] = useState({name:'', email:'', phoneNumber:"", message:''})
  const [dropdown, setDropdown] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);
  const oneHour = 150;
  const thirtyMinutes = 100;

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleClick = () => {
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleChange = () => {
    setToggle(!toggle);
  };

  const handleDropDown = ()=>{
    setDropdown(!dropdown)
  }


  const globalData: GlobalData = {
    toggle,
    divRef,
    dropdown,
    formdata,
    selectedDate,
    oneHour,
    thirtyMinutes,
    handleChange,
    handleClick,
    handleDropDown,
    handleDateChange,
    setFormData,
  };

  return (
    <AppContext.Provider value={globalData}>
      {children}
    </AppContext.Provider>
  );
};

export const GlobalUseContext = () => {
  return useContext(AppContext);
};
