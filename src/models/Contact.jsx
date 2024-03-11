import React from "react";
import Button from "../layouts/Button";

const Contact = ({ closeForm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="popup-form absolute mt-12 text-black">
        <form className=" w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl shadow-lg">
          <h1 className="text-3xl font-semibold text-center text-gray-800">
            Book Now
          </h1>
          <div className=" flex flex-col">
            <input
              className="py-3 px-2 text-sm font-medium text-gray-700 rounded-lg"
              type="text"
              name="userFirstName"
              id="userFirstName"
              placeholder="First Name"
            />
          </div>
          <div className=" flex flex-col">
            <input
              className="py-3 px-2 text-sm font-medium text-gray-700 rounded-lg"
              type="text"
              name="userLastName"
              id="userLastName"
              placeholder="Last Name"
            />
          </div>
          <div className=" flex flex-col">
            <input
              className="py-3 px-2 text-sm font-medium text-gray-700 rounded-lg"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Your Email"
            />
          </div>
          <div className=" flex flex-col">
            <input
              className="py-3 px-2 text-sm font-medium text-gray-700 rounded-lg"
              type="number"
              name="userNumber"
              id="userNumber"
              placeholder="Phone No."
            />
          </div>
          <div className=" flex gap-5">
            <Button title="Book Appointment" />
            <button
              className=" bg-backgroundColor text-white px-10 rounded-md active:bg-red-500"
              onClick={closeForm}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
