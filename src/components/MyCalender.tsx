import React from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { GlobalUseContext } from "../utils/Context";
import { useNavigate } from "react-router-dom";

const ReservationCalendar: React.FC = () => {
    const { selectedDate, handleDateChange } = GlobalUseContext()
    const navigate = useNavigate()
    console.log(selectedDate)

    // const currentDate = new Date();

    const calculateMinTime = (date: Date): Date => {
        const dayOfWeek = date.getDay(); // 0 (Sunday) to 6 (Saturday)
        const minTime = new Date(date);

        // dayOfWeek === 0 ? minTime.setHours(0, 0) : minTime.setHours(0, 0);
        
        if (dayOfWeek === 0 || dayOfWeek === 6) {
          minTime.setHours(10, 0); // 10:00 AM for weekends
        } else {
          minTime.setHours(18, 0); // 6:00 PM for weekdays
        }
        
        return minTime;
      };
  
      const calculateMaxTime = (date: Date): Date => {
        const dayOfWeek = date.getDay(); // 0 (Sunday) to 6 (Saturday)
        const maxTime = new Date(date);

        // dayOfWeek === 0 ? maxTime.setHours(0, 0) : maxTime.setHours(0, 0);


        if (dayOfWeek === 0 || dayOfWeek === 6) {
          maxTime.setHours(13, 0); // 1:00 PM for weekends
        } else {
          maxTime.setHours(20, 0); // 9:00 PM for weekdays
        }
        
        return maxTime;
      };
  
    return (
      <div className="p-4">
        <h1 className="text-xl font-semibold mb-4">Booking Component</h1>
        <div className="md:flex justify-around ">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Select Date and Time:</label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            showTimeSelect
            timeIntervals={60}
            minTime={calculateMinTime(selectedDate || new Date())}
            maxTime={calculateMaxTime(selectedDate || new Date())}
            dateFormat="MMMM d, yyyy h:mm aa"
            className="w-full border-gray-300 border rounded-md p-2"
            inline
          />
        </div>
            <div className="px">
                <h1 className="text-2xl py-3 underline">Initial Consultation</h1>
                <p className="py-1 text-lg">Ify Tony-Osondu</p>
                <p >Zoom meeting</p>
                <p className="py-1">30 mins</p>
                <p className="font-bold">US $100</p>
            </div>
        </div>
                <div className="md:w-1/3 mx-auto">
                    <button className="w-full py-3 rounded-md bg-[#DB00A1]" disabled={selectedDate === null ? true : false} onClick={()=> navigate('/booking-form')}>Next</button>
                </div>

        {/* <h1>{selectedDate}</h1> */}
        {/* Other booking-related fields and buttons can be added here */}
      </div>
    );
};

export default ReservationCalendar;
