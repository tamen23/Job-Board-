import React, {useState} from "react";
import {TERipple} from "tw-elements-react";
import authAPI from "../../Requests/authAPI.js";

export default function Login({onLogin, history}) {
  console.log(history);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = ({currentTarget}) => {
    const { name, value } = currentTarget;
    setCredentials({...credentials, [name]: value});
  };

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(credentials);
      try {
        await authAPI.authenticate(credentials);
        onLogin(true);
        history.push("/profile");
      } catch (error) {
          console.log(error.response);
      }
    }

  
  return (
    <section className="flex justify-center items-center h-screen w-screen bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* Left column container */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    <div className="text-center">
                      <h4 className="mb-12 mt-4 pb-1 text-xl font-bold">LOGIN</h4>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <p className="mb-4 flex text-center">Please login to your account</p>
                      
                      {/* Email input */}
                      <h1>Email</h1>
                      <input
                        type="text"
                        label=" "
                        name="username"
                        value={credentials.username}
                        onChange={handleInputChange}
                        className="mb-4  text-black"  
                      />

                      {/* Password input */}
                      <h1>Password</h1>
                      <input
                        type="password"
                        label=""
                        name="password"
                        value={credentials.password}
                        onChange={handleInputChange}
                        className="mb-4 text-black"  
                      />
                      
                      {/* Submit button */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="submit"
                            style={{
                              background:
                                  "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                            }}
                        >
                          Log in
                        </button>
                        <a href="#">Forgot password?</a>
                      </div>

                      {/* Register button */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Do not have an account?</p>
                        <TERipple rippleColor="light">
                          <button
                            type="button"
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover.bg-opacity-10 hover:text-danger-600 focus.border-danger-600 focus.text-danger-600 focus:outline-none focus.ring-0 active.border-danger-700 active.text-danger-700 dark:hover.bg-neutral-100 dark.hover.bg-opacity-10"
                          >
                            Register
                          </button>
                        </TERipple>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Right column container with background and description */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We find you a Work
                    </h4>
                    <p className="text-sm">
                      Are you ready to take the next step in your professional journey? At [Your Job Board Name],
                      we are dedicated to connecting talented individuals like you with the best career opportunities in your field.
                      Whether you are an experienced professional looking for a new challenge, a recent graduate eager to start
                      your career, or someone considering a career change, our job board is the ideal platform for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
