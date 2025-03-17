import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen p-10 bg-gradient-to-b from-green-50 to-green-100">
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-5 w-auto  p-2  ">
        <Card className="border-green-300 bg-green-50 drop-shadow-2xl shadow-teal-300 hover:bg-green-100 font-bold py-2 px-2 rounded-lg shadow-md transition duration-300 ease-in-out flex flex-col items-center">
          <CardTitle className=" text-green-900 text-lg text-center">
            Why Waste Segregation is Important{" "}
          </CardTitle>
          <CardContent className=" w-auto">
            <iframe
              src="https://www.youtube.com/embed/0ZiD_Lb3Tm0"
              width={"200px"}
              className="border rounded-lg"
            ></iframe>
          </CardContent>
          <CardFooter>
            <Link
              href="https://www.youtube.com/watch?v=0ZiD_Lb3Tm0"
              target="_blank"
              className="text-md  text-center w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out "
            >
              Open Video in Youtube{" "}
            </Link>
          </CardFooter>
        </Card>

        <Card className="border-green-300 bg-green-50 drop-shadow-2xl shadow-teal-300 hover:bg-green-100 font-bold py-2 px-2 rounded-lg shadow-md transition duration-300 ease-in-out flex flex-col items-center">
          <CardTitle className=" text-green-900 text-lg text-center">
            Save Earth. Garbage Sorting Rules{" "}
          </CardTitle>
          <CardContent className=" w-auto">
            <iframe
              src="https://www.youtube.com/embed/VQTtg3KgVv4"
              width={"200px"}
              className="border rounded-lg"
            ></iframe>
          </CardContent>
          <CardFooter>
            <Link
              href="https://www.youtube.com/watch?v=VQTtg3KgVv4"
              target="_blank"
              className="text-md  text-center w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out "
            >
              Open Video in Youtube{" "}
            </Link>
          </CardFooter>
        </Card>

        <Card className="border-green-300 bg-green-50 drop-shadow-2xl shadow-teal-300 hover:bg-green-100 font-bold py-2 px-2 rounded-lg shadow-md transition duration-300 ease-in-out flex flex-col items-center">
          <CardTitle className=" text-green-900 text-lg text-center">
            How to sort your garbage, compost, and recycling{" "}
          </CardTitle>
          <CardContent className=" w-auto">
            <iframe
              src="https://www.youtube.com/embed/hl96rnenaQY"
              width={"200px"}
              className="border rounded-lg"
            ></iframe>
          </CardContent>
          <CardFooter>
            <Link
              href="https://www.youtube.com/watch?v=hl96rnenaQY"
              target="_blank"
              className="text-md  text-center w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out "
            >
              Open Video in Youtube{" "}
            </Link>
          </CardFooter>
        </Card>

        <Card className="border-green-300 bg-green-50 drop-shadow-2xl shadow-teal-300 hover:bg-green-100 font-bold py-2 px-2 rounded-lg shadow-md transition duration-300 ease-in-out flex flex-col items-center">
          <CardTitle className=" text-green-900 text-lg text-center">
            WASTE SORTING AT JAC ♻️ An Ultimate Guide{" "}
          </CardTitle>
          <CardContent className=" w-auto">
            <iframe
              src="https://www.youtube.com/embed/2T-ihri7qMQ"
              width={"200px"}
              className="border rounded-lg"
            ></iframe>
          </CardContent>
          <CardFooter>
            <Link
              href="https://www.youtube.com/watch?v=2T-ihri7qMQ"
              target="_blank"
              className="text-md  text-center w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out "
            >
              Open Video in Youtube{" "}
            </Link>
          </CardFooter>
        </Card>

        <Card className="border-green-300 bg-green-50 drop-shadow-2xl shadow-teal-300 hover:bg-green-100 font-bold py-2 px-2 rounded-lg shadow-md transition duration-300 ease-in-out flex flex-col items-center">
          <CardTitle className=" text-green-900 text-lg text-center">
            Proper Waste Disposal According to the Properties of Each Material{" "}
          </CardTitle>
          <CardContent className=" w-auto">
            <iframe
              src="https://www.youtube.com/embed/Lfj8SKFlTpI"
              width={"200px"}
              className="border rounded-lg"
            ></iframe>
          </CardContent>
          <CardFooter>
            <Link
              href="https://www.youtube.com/watch?v=Lfj8SKFlTpI"
              target="_blank"
              className="text-md  text-center w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out "
            >
              Open Video in Youtube{" "}
            </Link>
          </CardFooter>
        </Card>

        <Card className="border-green-300 bg-green-50 drop-shadow-2xl shadow-teal-300 hover:bg-green-100 font-bold py-2 px-2 rounded-lg shadow-md transition duration-300 ease-in-out flex flex-col items-center">
          <CardTitle className=" text-green-900 text-lg text-center">
            Waste Sorting Guide Animation{" "}
          </CardTitle>
          <CardContent className=" w-auto">
            <iframe
              src="https://www.youtube.com/embed/gsYyVhbu8Ro"
              width={"200px"}
              className="border rounded-lg"
            ></iframe>
          </CardContent>
          <CardFooter>
            <Link
              href="https://www.youtube.com/watch?v=gsYyVhbu8Ro"
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
