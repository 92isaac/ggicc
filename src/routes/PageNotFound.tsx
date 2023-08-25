import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">Oops!</h1>
        <h2 className="text-lg md:text-3xl font-medium text-gray-800 mb-8">
        Something went wrong... <br />
        OR <br />
          The page you are looking for does not exist.
        </h2>
        <p className="text-gray-600 mb-4">
          We apologize for the inconvenience. Please try again later.
        </p>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
          <Link to='/'>Go back home</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
