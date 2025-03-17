import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen p-10 bg-gradient-to-b from-green-50 to-green-100">
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-5 w-auto  p-2  ">
        <Card
          //key={user.id}
          className="border-green-300 bg-green-50 drop-shadow-2xl shadow-teal-300 hover:bg-green-100 font-bold py-2 px-2 rounded-lg shadow-md transition duration-300 ease-in-out flex flex-col items-center"
        >
          <div className=""></div>
          <CardTitle className=" text-green-900 text-lg text-center">
            Sorting Guide
          </CardTitle>
          <CardContent className=" w-auto">
            <iframe
              src="https://www.youtube.com/embed/RfuysbfRZ5I"
              width={"200px"}
              className="border rounded-lg"
            ></iframe>
          </CardContent>
          <CardFooter>
            <Link
              href="https://www.youtube.com/watch?v=RfuysbfRZ5I&t=4007s"
              target="_blank"
              className="text-md  text-center w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out "
            >
              Open Video in Youtube{" "}
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default page;
