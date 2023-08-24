import React, { ReactNode } from "react";

type DropdownProps = {
  children: ReactNode;
};

const Dropdown: React.FC<DropdownProps> = ({children}) => {


  return (
    <div className="origin-top-right absolute -right-14 md:right-0 mt-2 w-60 z-50 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          {children}
     </div>
  );
};

export default Dropdown;
