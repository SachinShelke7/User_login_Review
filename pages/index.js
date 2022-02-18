import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function Home() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [gender, setGender] = useState();
  const router = useRouter();

  const handleSubmit = () => {
    window.localStorage.setItem("userName", userName);
    window.localStorage.setItem("gender", gender);
    window.localStorage.setItem("password", password);
    window.localStorage.setItem("firstName", firstName);
    window.localStorage.setItem("lastName", lastName);
    window.localStorage.setItem("businessName", businessName);
    window.localStorage.setItem("age", age);
    setCookie("user", "user");
  };

  useEffect(() => {
    if (cookies.user) {
      router.push("/details");
    }
    if (!cookies.user) {
      window.localStorage.removeItem("userName");
      window.localStorage.removeItem("password");
      window.localStorage.removeItem("firstName");
      window.localStorage.removeItem("lastName");
      window.localStorage.removeItem("businessName");
      window.localStorage.removeItem("gender");
      window.localStorage.removeItem("age");
    }
  }, [cookies.user]);

  return (
    <div>
      <Head>
        <title>User_Review</title>
      </Head>
      <div className="w-full h-screen flex items-center justify-center bg-gray-300 text-white font-serif">
        <div className="shadow-lg shadow-[#20202a] bg-[#252632] w-[90%] sm:w-[75%] md:w-[65%] lg:w-[55%] p-2 rounded-sm">
          <form
            onSubmit={() => handleSubmit()}
            className="flex flex-col space-y-5"
          >
            <h2 className="text-center font-medium text-2xl border-b border-white">
              Fill The Details
            </h2>
            <div className="flex flex-col md:flex-row space-y-5 md:space-x-5 md:space-y-0">
              <div className="w-full md:w-1/2">
                <label htmlFor="userName">UserName:</label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  autoComplete="username"
                  className="w-full py-[6px] px-1 rounded-sm bg-transparent border border-white outline-none"
                  required
                />
              </div>
              <div className="w-full md:w-1/2">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  className="w-full py-[6px] px-1 rounded-sm bg-transparent border border-white outline-none"
                  required
                />
              </div>
            </div>

            <div className="flex space-x-5">
              <div className="w-1/2">
                <label htmlFor="firstName">FirstName:</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  autoComplete="firstName"
                  className="w-full py-[6px] px-1 rounded-sm bg-transparent border border-white outline-none"
                  required
                />
              </div>

              <div className="w-1/2">
                <label htmlFor="lastName">LastName:</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  autoComplete="lastName"
                  className="w-full py-[6px] px-1 rounded-sm bg-transparent border border-white outline-none"
                  required
                />
              </div>
            </div>

            <div className="flex space-x-5 items-center">
              <div className="w-1/2">
                <label htmlFor="gender">Gender</label>
                <br/>
                <input
                  type="radio"
                  value="Male"
                  name="gender"
                  checked={gender === 'Male'}
                  onChange={() => setGender("Male")}
                  required
                />
                Male
                <input
                  type="radio"
                  value="Female"
                  name="gender"
                  checked={gender === 'Female'}
                  onChange={() => setGender("Female")}
                />
                Female
              </div>
              <div className="w-1/2">
                <label htmlFor="age">Age:</label>
                <input
                  type="number"
                  autoComplete="age"
                  placeholder="Age"
                  className="w-full py-[6px] px-1 rounded-sm bg-transparent border border-white outline-none"
                  required
                  min={1}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="businessName">BusinessName:</label>
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                autoComplete="businessName"
                className="w-full py-[6px] px-1 rounded-sm bg-transparent border border-white outline-none"
                required
              />
            </div>

            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 rounded-sm px-2 py-1 text-gray-300 border border-transparent hover:border-white hover:text-white active:bg-green-500 my-1"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
