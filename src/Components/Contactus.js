import React, { useState } from 'react';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (

    <div id='contact' className='py-16'>
      <div className="flex flex-col md:flex-row p-4 md:p-8">
      <div className="md:flex-1">
      <div className="max-w-md mx-auto p-4 md:p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-600">
            Contact Number
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            rows="4"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
      </div>

      <div className="md:flex-1 bg-gray-200 p-4 md:p-6 rounded-md mt-4 md:mt-0">
        <h2 className="text-2xl font-semibold mb-4">Scool2</h2>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-600">Address</label>
          <p className="text-gray-800">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi suscipit voluptatum ratione error laboriosam odio.</p>
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-600">Contact Number</label>
          <a className="text-gray-800" href="tel:+911234567890">+91 12345 67890</a>
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-600">Lorem, ipsum dolor.</label>
          <p className="text-gray-800">Mr . ABC</p>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Contactus;
