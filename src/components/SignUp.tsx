import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { GlobalUseContext } from '../utils/Context';
import { toast } from 'react-toastify'
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';



const SignUp: React.FC = () => {
    const { login, setLogin } =GlobalUseContext()
    const navigate = useNavigate()

console.log(auth.currentUser?.email)
console.log(login.email)
  const handleLogin = async () => {
    try{
        await  createUserWithEmailAndPassword(auth, login.email, login.password)
        toast.success(`Logged in as ${login.email}`);
        console.log(login)
        navigate('/dashboard')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch(err: any){
        toast.error(err.message);
        console.error(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto mb-20">
        <h2 className="text-xl font-semibold mb-4">Create User</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email:</label>
          <div className="flex items-center">
            <FaUser className="text-gray-400 mr-2" />
            <input
              type="email"
              value={login.email}
              onChange={(e) => setLogin({...login, email: e.target.value})}
              className="w-full border rounded p-2"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password:</label>
          <div className="flex items-center">
            <FaLock className="text-gray-400 mr-2" />
            <input
              type="password"
              value={login.password}
              onChange={(e) => setLogin({...login, password: e.target.value})}
              className="w-full border rounded p-2"
            />
          </div>
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white font-semibold rounded py-2 hover:bg-blue-600"
        >
          Create
        </button>
        <small>Have an account? log in <Link to='/admin'>here</Link></small>
      </div>
    </div>
  );
};

export default SignUp;
