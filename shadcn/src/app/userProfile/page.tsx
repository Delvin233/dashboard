"use client";

import React from "react";

const page = () => {
  return (
    <form className="min-h-screen flex flex-col p-5 bg-gradient-to-b from-green-50 to-green-100 text-green-900">
      <div className="text-xl p-2 gap-5 flex flex-col ">
        <img
          src="blackMage.svg"
          alt="user picture"
          className="rounded-full aspect-square object-cover w-50 object-center"
        />{" "}
        <p className="">Update Profile</p>
        <input
          type="text"
          placeholder="Name"
          className="border border-green-800 rounded-md"
        />
        <input
          type="text"
          placeholder="Email"
          className="border border-green-800 rounded-md"
        />
        <input
          type="text"
          placeholder="Location"
          className="border border-green-800 rounded-md"
        />
        <input
          type="text"
          placeholder="Telephone NUmber"
          className="border border-green-800 rounded-md"
        />
        <div className="flex flex-row justify-between gap-10">
          <span>Upload Image</span>
          <span className=" hover:text-green-900 text-sm">
            <input
              type="file"
              accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/webp"
            />
          </span>
        </div>
      </div>
      <button className=" bg-green-500 hover:bg-green-700 text-green-900 font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out cursor-pointer">
        Save
      </button>
    </form>
  );
};

export default page;
