import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SignUps = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToPolicy: false,
  });

  // Fetch data from API (if needed)
  useEffect(() => {
    // Replace this URL with your actual API endpoint
    const fetchData = async () => {
      try {
        const response = await fetch('API_URL/auth/signup');
        const data = await response.json();
        
        setFormData({
          firstName: data.firstName || '',
          lastName: data.lastName || '',
          email: data.email || '',
          password: '',
          confirmPassword: '',
          agreeToPolicy: false,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div>
     

      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-6 mx-auto bg-white rounded-md shadow-lg">
          <h2 className="text-2xl font-semibold text-black">Create Your Account</h2>
          <p className="mt-2 text-black">Enter your personal details to create an account</p>
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm text-black">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 text-black bg-gray-200 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div>
                <label className="block text-sm text-black">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 text-black bg-gray-200 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-black">Enter Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 text-black bg-gray-200 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm text-black">Enter Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 text-black bg-gray-200 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm text-black">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 text-black bg-gray-200 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="flex items-center justify-between mt-6">
              <div>
                <input
                  type="checkbox"
                  name="agreeToPolicy"
                  checked={formData.agreeToPolicy}
                  onChange={handleChange}
                  className="text-purple-500 form-checkbox"
                />
                <label className="ml-2 text-sm text-black">Agree with&nbsp;</label>
                <Link to="#" className="text-sm text-blue-500 hover:underline">
                  Privacy Policy
                </Link>
              </div>
            </div>
            <div className="mt-6">
              <button type="submit" className="w-full bg-customPurple text-white px-4 py-2 rounded-lg hover:bg-opacity-90">
                Create Account
              </button>
            </div>
          </form>
          <div>
            <p className="mt-4 text-xs font-medium text-gray-700">
              Already have an account?
              <Link to="/auth/Logins" className="text-sm text-blue-500 hover:underline">
                &nbsp;Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUps;
