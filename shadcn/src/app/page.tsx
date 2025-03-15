import CompletedTaskCard from "@/components/CompletedTaskCard";
import Balance from "@/components/Balance";
import Welcome from "@/components/Welcome";
import EditProfile from "@/components/EditProfile";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LuLeaf } from "react-icons/lu";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 p-5 flex flex-col gap-10">
      <div className="flex md:flex-row sm:flex-col justify-between gap-5 ">
        <img
          src="blackMage.svg"
          alt="user picture"
          className="rounded-full aspect-square object-cover w-50 object-center"
        />
        <div className="text-center flex flex-col justify-center sm:flex-row gap-5 md:mt-30">
          {" "}
          <Welcome />
          <EditProfile />
        </div>
      </div>

      <div className="flex flex-row gap-5  justify-center text-green-700 text-center">
        <input
          type="text"
          placeholder="Amount to Withdraw: "
          className="border border-green-800 rounded-md"
        />
        <Button className=" bg-green-100 hover:bg-green-700 text-green-900 hover:text-green-200 font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
          Withraw
        </Button>
      </div>
      <CompletedTaskCard />
    </div>
  );
}
