import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import UserIcon from "../assets/user.svg";

export default function Details() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const router = useRouter();

  useEffect(() => {
    if (!cookies.user) {
      router.push("/");
    }
  }, [cookies.user]);
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-300 text-white font-serif">
      <div className="shadow-lg shadow-[#20202a] bg-[#252632] w-[45%] p-5 rounded-sm max-w-[300px]">
        <h2 className="text-center font-medium text-xl border-b border-white px-5 my-5 mx-5">
          Review Card
        </h2>
        <div className="pl-5 flex flex-col space-y-2">
          <p className="truncate">
            <span className="text-gray-300 text-sm">UserName:</span>
            {window.localStorage.getItem("userName")}
          </p>

          <div className="flex items-center space-x-5 py-2">
            <div className="w-7 h-7">
              <Image src={UserIcon} alt="user" />
            </div>
            <div className="flex truncate">
              <p className="pr-1 uppercase">
                {window.localStorage.getItem("firstName")}
              </p>
              <p className="uppercase">
                {window.localStorage.getItem("lastName")}
              </p>
            </div>
          </div>
          <div>
            <span className="text-gray-300">Gender:</span>
            <span className="capitalize">
              {window.localStorage.getItem("gender")}
            </span>
          </div>
          <div>
            <span className="text-gray-300">Age:</span>
            <span className="capitalize">
              {window.localStorage.getItem("age")}
            </span>
          </div>
          <p className="text-gray-300">Business Name: </p>
          <p className="truncate">
            {window.localStorage.getItem("businessName")}
          </p>
        </div>
        <div className="w-full flex justify-center mt-5">
          <button
            onClick={() => removeCookie("user")}
            className="bg-blue-500 hover:bg-blue-600 rounded-sm px-2 py-1 text-gray-300 border border-transparent hover:border-white hover:text-white active:bg-red-500"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
