import { Span } from "next/dist/trace";
import React from "react";

interface Name {
  name: string;
}

const Welcome = () => {
  //const userName = await fetch("http://localhost:4000/profile");
  //const name: Name[] = await userName.json();

  return (
    <div>
      <span className="text-green-900">Welcome </span>
      <span key={""} className="text-3xl text-emerald-900">
        Mystical Bread
      </span>
    </div>
  );
};

export default Welcome;
