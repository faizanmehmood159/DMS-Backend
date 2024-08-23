import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../api/auth/config';
const Logins = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const body = {
        email,
        password,
      };
      const response = await axios.post(`${API_URL}/auth/signn`, body); // Ensure 'signin' is the correct endpoint
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard'); // Redirect to the dashboard or another protected page
    } catch (error) {
      setError('Login failed. Please check your credentials and try again.');
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="flex justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 mx-auto bg-white rounded-md shadow-lg">
        <h2 className="text-2xl font-semibold text-black">Sign into account</h2>
        <p className="mt-2 text-black">Enter your Email & Password to Login</p>
        {error && <p className="text-red-500">{error}</p>}
        <form className="mt-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-black">Enter Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 text-black bg-gray-200 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm text-black">Enter Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 text-black bg-gray-200 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between mt-6">
            <div>
              <input type="checkbox" className="text-purple-500 form-checkbox" />
              <label className="ml-2 text-sm text-black">Remember Password</label>
            </div>
            <Link to="#" className="text-sm text-blue-500 hover:underline">
              Forgot password?
            </Link>
          </div>
          <div className="mt-6">
            <button className="w-full bg-customPurple text-white px-4 py-2 rounded-lg hover:bg-opacity-90" type="submit">
              Sign in
            </button>
          </div>
        </form>
        <div>
          <p className="mt-4 text-xs font-medium text-black-700">
            Don't have an Account?
            <Link to="/auth/signups" className="text-sm text-blue-500 hover:underline">
              &nbsp;Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Logins;
