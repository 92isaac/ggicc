import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { DashboardNavbar } from "../components/DashboardNavbar";
import { Graph } from "../components/Graph";
// import { Footer } from "../components/Footer/Footer";
// import { MobileFooter } from "../components/Footer/MobileFooter";
// import { Navbar } from "../components/Navigationbar/Navbar";


const SharedDashboardLayout = () => {
  return (
    <div className="mx-5 md:mx-0">
      <div className="md:flex gap- justify-between w-full">
        <div className=" md:mx-0 md:w-1/5 md:h-screen border rounded-md my-1 w-full md:fixed">
          <Sidebar />
        </div>
        <div className=" w-full md:w-4/5  mt-1 rounded-md md:ml-[20%]">
          <div className="md:mx-0 md:border rounded-md">
            <DashboardNavbar />
          </div>
         <section className="flex w-full justify-between items-center md:mx-0">
         <main className="w-3/4  md:mb-10 md:h-[83vh] overflow-y-scroll my-2 border rounded-md">
            <Outlet />
          </main>
          <Graph/>
         </section>
        </div>
      </div>
    </div>
  );
};

export default SharedDashboardLayout;
