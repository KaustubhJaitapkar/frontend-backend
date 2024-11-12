// src/pages/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/users/register', formData);
            navigate('/login'); // Redirect to login page after successful registration
        } catch (error) {
            setError('Registration failed. Please try again.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-50 to-green-100">
  <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-8 border border-gray-300">
    <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Register</h2>
    {error && (
      <div className="bg-red-100 text-red-700 px-4 py-3 rounded-md mb-4 border border-red-300 shadow-sm">
        {error}
      </div>
    )}
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-green-600 text-white w-full py-2 rounded-md border border-green-700 shadow-md hover:bg-green-500 transition duration-200"
      >
        Register
      </button>
    </form>
    <p className="text-center text-gray-600 mt-4">
      Already have an account?{" "}
      <a href="/login" className="text-green-600 hover:underline">
        Login here
      </a>
    </p>
  </div>
</div>

    );
}

export default Register;
