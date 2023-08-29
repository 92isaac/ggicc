import React from "react";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaBell } from "react-icons/fa";

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const handleLOgout = async () => {
    try {
      await signOut(auth);
      toast.success(`Logged out successfully`);
      navigate("/");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err.message);
    }
  };
  return (
    <div className="transform transition duration-1000 ease-in-out ">
      <div className="bg-white p-4 rounded-lg shadow-md  mb-4">
        <h2 className="text-xl font-semibold mb-4">Notifications</h2>
        {/* Notification content */}
        <FaBell className="text-2xl mb-2" />
        <p>Notification 1</p>
        <p>Notification 2</p>

        <div className="">
          <button
            onClick={() => {
              handleLOgout();
            }}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};
