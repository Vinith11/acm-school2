import React, { useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
import conf from "../conf/conf"

const Admission = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    address: "",
    classStd: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(conf.serviceId, conf.templateContact, form.current, conf.publicKey)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div id="contact" className="py-16">
      <div className="flex flex-col md:flex-row p-4 md:p-8">
        <div className="md:flex-1">
          <div className="max-w-md mx-auto p-4 md:p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Admission
            </h2>
            <form ref={form} onSubmit={sendEmail}>
              {/* Name */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
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

              {/* std */}
              <div className="mb-4">
                <label
                  htmlFor="classStd"
                  className="block text-sm font-medium text-gray-600"
                >
                  Class
                </label>
                <input
                  type="text"
                  id="classStd"
                  name="classStd"
                  value={formData.classStd}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>

              {/* mobile number */}
              <div className="mb-4">
                <label
                  htmlFor="contactNumber"
                  className="block text-sm font-medium text-gray-600"
                >
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

              {/* email */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
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

              {/* address */}
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-600"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  rows="4"
                  required
                ></textarea>
              </div>

              <div className="flex ">
                <button
                  type="submit"
                  className=" bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 justify-center items-center"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
