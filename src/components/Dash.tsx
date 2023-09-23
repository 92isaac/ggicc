/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { FaListUl } from "react-icons/fa";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
// import { Graph } from './Graph';

interface BookingTypes {
  id: any;
  name: string;
  data: string;
  duration: string;
  email: string;
  message: string;
  phonenumber: number;
  time: string;
}

const Dash: React.FC = () => {
  const [orders, setOrder] = useState([]);
  const orderCollector = collection(db, "bookings");

  const getOrderList = async () => {
    try {
      const data = await getDocs(orderCollector);
      const filteredData: any = data.docs.map((dat) => ({
        ...dat.data(),
        id: dat.id,
      }))!;
      setOrder(filteredData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getOrderList();
  }, []);

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen p-4">
      <div className="bg-white p-4 rounded-lg shadow-md w-full mb-4 md:mr-4">
        <h2 className="text-xl font-semibold mb-4">Booking Orders</h2>
        {/* Booking order list */}
        <div>
        <FaListUl className="text-2xl mb-2" />
        </div>
        <div className="w-full overflow-x-auto border border-b-md md:mb-20">
          <table
            className="w-full whitespace-no-wrap border-collapse border  border-slate-400 border-b-md"
          
          >
            <thead>
              <tr className="text-left font-bold">
                <th className="px-6 py-1 border border-slate-300">s/n</th>
                <th className="px-6 py-1 border border-slate-300">Name</th>
                <th className="px-6 py-1 border border-slate-300">email</th>
                <th className="px-6 py-1 border border-slate-300">
                  phone Number
                </th>
                <th className="px-6 py-1 border border-slate-300">Message</th>
                <th className="px-6 py-1 border border-slate-300">Date</th>
                <th className="px-6 py-1 border border-slate-300">Time</th>
                <th className="px-6 py-1 border border-slate-300">Duration</th>
                <th className="px-6 py-1 border border-slate-300">ID</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order: BookingTypes, idx) => (
                <tr   key={order.id}>
                  <td className="px-6 py-1 border border-slate-300">
                    {idx + 1}
                  </td>
                  <td className="px-6 py-1 border border-slate-300">
                    {order?.name}
                  </td>
                  <td className="px-6 py-1 border border-slate-300">
                    {order?.email}
                  </td>
                  <td className="px-6 py-1 border border-slate-300">
                    {order?.phonenumber}
                  </td>
                  <td className="px-6 py-1 border border-slate-300">
                    {order?.message}
                  </td>
                  <td className="px-6 py-1 border border-slate-300">
                    {order?.data}
                  </td>
                  <td className="px-6 py-1 border border-slate-300">
                    {order?.time}
                  </td>
                  <td className="px-6 py-1 border border-slate-300">
                    {order?.duration}
                  </td>
                  <td className="px-6 py-1 border border-slate-300">
                    {order?.id}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Growth Chart */}
      {/* <Graph /> */}
    </div>
  );
};

export default Dash;
