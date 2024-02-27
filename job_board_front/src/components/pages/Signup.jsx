// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import {TEInput, TERipple} from "tw-elements-react";
import axios from 'axios';


export default function Signup() {
  const [user, setUser] = useState({
    email: '',
    firstName: '',
    lastName: '',
    plainPassword: '',
    confirmPassword: '',
  });
  const handleInputChange = ({currentTarget}) => {
    const { name, value } = currentTarget;
    setUser({...user, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await axios.post('http://localhost:8000/api/users', user, {
        headers: {
          'Content-Type': 'application/ld+json', // Set the correct content type
        },
      });
      console.log(response);
    if (response.status===200) {
      const data = response.data;
      console.log('Registration successful:', data);
    } else {
      console.error('Registration failed:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('Registration failed:', error);
  }
};
  return (
    <section className="flex justify-center items-center h-screen w-screen bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800"
              style={{
                background:
                  "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
              }}
            >
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center">
                      {/* <img
                        className="mx-auto w-48"
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        alt="logo"
                      /> */}
                      <h4 className="mb-12 mt-4 pb-1 text-xl font-bold">
                        SIGNUP
                      </h4>
                    </div>

                    <form>
                      <p className="mb-4 flex text-center">Please sign up  to create a new  account</p>
                      {/* <!--emailinput--> */}
                      <h1>Email</h1>
                      <input
                        type="text"
                        name="email"
                        value={user.email}
                        onChange={handleInputChange}
                        label=""
                        className="mb-4"
                      /> 
                      <h1>First Name</h1>
                      <input
                        type="text"
                        name="firstName"
                        value={user.firstName}
                        onChange={handleInputChange}
                        label=" "
                        className="mb-4"
                      />
                      <h1>Last  Name</h1>
                      <input
                        type="text"
                        name="lastName"
                        value={user.lastName}
                        onChange={handleInputChange}
                        label=""
                        className="mb-4"
                      /> 

                      {/* <!--Password input--> */}
                      <h1>Password</h1>
                      <input
                        type="password"
                        name="plainPassword"
                        value={user.plainPassword}
                        onChange={handleInputChange}
                        label=""
                        className=" mb-4"
                      />
                      <h1>Confrim Password</h1>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={user.confirmPassword}
                        onChange={handleInputChange}
                        label=""
                        className="mb-1"
                      />

                      {/* <!--Submit button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <TERipple rippleColor="light" className="w-full">
                          <button
                            className="mb-4 mt-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="submit"
                            style={{
                              background:
                                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                            }}
                            
                          >

                            Signup
                          </button>
                        </TERipple>


                      </div>

                      {/* <!--Register button--> */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Already have an account ?   </p>
                        <TERipple rippleColor="light">
                          <button
                            type="button"
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          >
                            LOGIN
                          </button>
                        </TERipple>
                      </div>
                    </form>
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">

                    <img src="/images/photo.png" alt="" />


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
