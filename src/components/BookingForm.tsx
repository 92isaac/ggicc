import React from "react";
import { GrFormPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { GlobalUseContext } from "../utils/Context";

export const BookingForm: React.FC = () => {
  const navigate = useNavigate();
  const { selectedDate, formdata, setFormData } = GlobalUseContext();
  console.log(selectedDate ? selectedDate.toTimeString() : null);
  const currentDate = new Date();
  return (
    <div className="px-4">
      <div className="px-4 mt-2">
        <GrFormPrevious
          className="text-2xl w-10 h-10 rounded-full border cursor-pointer"
          onClick={() => navigate(-1)}
        />
      </div>
      <form className="my-5 md:flex justify-around">
        <div>
          <h1 className="text-2xl">Fill out your details</h1>
          <div className="h-0.5 bg-gray-400 my-5"></div>
          <p className="mb-5">Tell us a bit about yourself</p>
          <div>
            <div className="flex justify-between items-center gap-5 my-4">
              <div>
                <label htmlFor="" className="block pb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  title="name"
                  className="border rounded-md p-2 w-full"
                  value={formdata.name}
                  onChange={(e) =>
                    setFormData({ ...formdata, name: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label htmlFor="" className="block pb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  title="email"
                  className="border rounded-md p-2 w-full"
                  value={formdata.email}
                  onChange={(e) =>
                    setFormData({ ...formdata, email: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div className="py-3">
              <label htmlFor="" className="block pb-2">
                Phone Number
              </label>
              <input
                type="tel"
                title="telephone"
                className="border rounded-md p-2 w-full"
                value={formdata.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formdata, phoneNumber: e.target.value })
                }
              />
            </div>
            <div className="py-3">
              <label htmlFor="" className="block pb-2">
                Message
              </label>
              <textarea
                title="message"
                className="border rounded-md p-2 w-full"
                value={formdata.message}
                onChange={(e) =>
                  setFormData({ ...formdata, message: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl py-3 underline">Initial Consultation</h1>
          <h2>Date: {selectedDate ? selectedDate.toDateString() : null}</h2>
          <h2>Time: {selectedDate ? selectedDate.toTimeString() : null}</h2>
          <p className="py-1 text-lg">Ify Tony-Osondu</p>
          <p>Zoom meeting</p>
          <p className="py-1">30 mins</p>
          <p className="font-bold">US $100</p>

          <div>
            <small className="block text-xs">
              {currentDate.toDateString()}
            </small>
            <small className="block text-xs">
              {currentDate.toTimeString()}
            </small>
          </div>
          <div className="w-full mx-auto">
            <button
              className="w-full py-3 rounded-md bg-[#DB00A1] text-white"
              onClick={(e) => {
                e.preventDefault();
                navigate("/booking-form");
                console.log(formdata);
              }}
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
