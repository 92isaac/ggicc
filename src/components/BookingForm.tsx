/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { GrFormPrevious } from "react-icons/gr";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalUseContext } from "../utils/Context";
import { services } from "../utils/data";
import { toast } from 'react-toastify'
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";



interface DataType {
  id: string;
  time: string;
  price: number;
  image: string;
}


export const BookingForm: React.FC = () => {
  const navigate = useNavigate();
  const { selectedDate, formdata, setFormData } = GlobalUseContext();
  console.log(selectedDate ? selectedDate.toTimeString() : null);
  const currentDate = new Date();

  const { id } = useParams<{ id: string }>();
  const bookinDetails: DataType = services.find(
    (service) => service.id === id
  )!;

  const bookingCollections = collection(db, 'bookings')
  const handleBookings= async()=>{
      try{
        await addDoc(bookingCollections, {
          name: formdata.name,
          data:selectedDate.toDateString(),
          duration:bookinDetails.time,
          email:formdata.email,
          message:formdata.message,
          phonenumber:formdata.phoneNumber,
          time:selectedDate.toTimeString(),
        } )
        toast.success(`Meeting created ${formdata.name} successfully`)
      }catch(err:any){
        toast.error("An error occurred")
      }

  }

  return (
    <div className="px-4">
      <div className="px-4 mt-2">
        <GrFormPrevious
          className="text-2xl w-10 h-10 rounded-full border cursor-pointer"
          onClick={() => navigate(-1)}
        />
      </div>
      <form className="my-5 md:flex justify-around">
        <div className="px-5">
          <h1 className="text-2xl">Fill out your details</h1>
          <div className="h-0.5 bg-gray-400 my-5"></div>
          <p className="mb-5">Tell us a bit about yourself</p>
          <div>
            <div className="md:flex justify-between items-center gap-5 my-4">
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
                value={Number(formdata.phoneNumber)}
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
        <div className="px-5">
          <h1 className="text-2xl py-3 underline">Initial Consultation</h1>
          <h2>Date: {selectedDate ? selectedDate.toDateString() : null}</h2>
          <h2>Time: {selectedDate ? selectedDate.toTimeString() : null}</h2>
          <p className="py-1 text-lg">Ify Tony-Osondu</p>
          <p>Zoom meeting</p>
          <p className="py-1">{bookinDetails?.time}</p>
          <p className="font-bold">US ${bookinDetails?.price}</p>

          <div>
            <small className="block text-xs">
              {currentDate.toDateString()}
            </small>
            <small className="block text-xs">
              {currentDate.toTimeString()}
            </small>
          </div>
          <div className="w-full mx-auto mt-4">
            <button
            disabled={formdata.name ==='' && formdata.email ==='' ? true : false}
              className={`${formdata.name ==='' && formdata.email ==='' ? 'bg-gray-300' : "bg-[#DB00A1]" }  w-full py-3 rounded-md text-white`}
              onClick={() => {
                // e.preventDefault();
                handleBookings()
                navigate('/')
              }}
            >
              {formdata.name ==='' && formdata.email ==='' ? "Fill the form " : "Next"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
