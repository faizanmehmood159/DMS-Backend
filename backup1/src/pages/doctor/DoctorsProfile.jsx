import React from 'react';
import { FaEllipsisV, FaStar } from 'react-icons/fa';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { Link } from 'react-router-dom';

const DoctorsProfile = () => {
  return (
    <>
      <Breadcrumb pageName="Doctor's Profile" />

      <div className="mt-10 p-6 mx-auto bg-white rounded-md shadow-lg">
        <div className="flex flex-col lg:flex-row gap-4 p-4 border rounded-lg w-full">
          <div className="w-1/3 lg:w-1/4">
            <img
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="profile-picture"
              className="rounded-full w-full lg:w-auto"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-lg font-semibold text-blue-gray-700">Natalie Paisley</h4>
                <p className="text-blue-gray-500">Specialist Doctor</p>
              </div>
              <div className="relative">
                <button className="text-gray-500">
                  <FaEllipsisV />
                </button>
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md p-2 hidden group-hover:block">
                  <ul>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">Edit</li>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">Delete</li>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">Create</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-2">
  {[...Array(5)].map((_, index) => (
    <FaStar key={index} className="text-yellow-500 mx-1" />
  ))}
</div>
          </div>
        </div>
      </div>
      <Link to="/authentication/SignUp">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">  
          Back
        </button>
      </Link>
    </>
  );
};

export default DoctorsProfile;
