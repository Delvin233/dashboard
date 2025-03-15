import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

interface Balance {
  Balance: number;
}

const Balance = () => {
  //const result = await fetch("http://localhost:4000/profile");
  //const balance: Balance[] = await result.json();

  return (
    <div className="">
      <div className="text-2xl flex flex-row">
        <span>Balance: </span>
        50
      </div>
    </div>
  );
};

export default Balance;
