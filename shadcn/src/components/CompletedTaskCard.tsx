import React from "react";
import { BellRing, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { resourceLimits } from "worker_threads";

interface Users {
  id: number;
  name: string;
  website: string;
}

const CompletedTaskCard = async () => {
  //const result = await fetch("http://localhost:4000/waste");
  //const users: Users[] = await result.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-8 w-auto  p-2  ">
      {/*  {users.map((user) => (
        <Card
          key={user.id}
          className="border-green-900 bg-green-50 drop-shadow-2xl"
        >
          <div className=""></div>
          <CardTitle className="m-3">{user.id}</CardTitle>
          <CardHeader> {user.name} </CardHeader>
          <CardContent>{user.website}</CardContent>
          <CardFooter>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
              {" "}
              {user.id}
            </Button>
          </CardFooter>
        </Card>
      ))} */}
      <Card
        //key={user.id}
        className="border-green-300 bg-green-50 drop-shadow-2xl shadow-teal-300 hover:bg-green-100 font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
      >
        <div className=""></div>
        <CardTitle className=" text-green-900 text-lg text-center">
          {" "}
          Waste Details
        </CardTitle>
        <CardContent className="text-green-950 text-lg">
          <p>Date:</p>
          <p>Waste Type: </p>
          <p>Waste Weight: </p>
        </CardContent>
        <CardFooter>
          <p className="text-md  text-center w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out ">
            Completed/In-progress/Rejected
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CompletedTaskCard;
