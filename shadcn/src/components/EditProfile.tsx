"use client";
import React from "react";
import { Button } from "./ui/button";
import { HiOutlinePencilAlt } from "react-icons/hi";
import Link from "next/link";

const EditProfile = () => {
  return (
    <div>
      <Link href={"/userProfile"}>
        {" "}
        <Button className=" w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
          <span>Edit</span>
          <HiOutlinePencilAlt />
        </Button>
      </Link>
    </div>
  );
};

export default EditProfile;
