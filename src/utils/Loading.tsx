import React from "react";

export const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-40 min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-4 border-[#72A407]"></div>
    </div>
  );
};
