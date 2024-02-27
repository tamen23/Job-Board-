import React from 'react'
import {Link, NavLink } from 'react-router-dom'

export default function Home () {
  return (
<section className="bg-white dark:bg-gray-800">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">FIND YOUR DREAM JOB</h2>
          <p className="mb-4">Welcome to JOBBOARD, your gateway to exciting career opportunities and top-notch talent. 
          We're committed to providing you with a seamless and efficient job search and recruitment experience.
           Our dedicated team is here to assist you every step of the way, ensuring that you have the support and information you need.</p>
          <p>Your satisfaction is our priority, and we're eager to help you make the most of your job search or recruitment journey.</p>
          <Link to="/find"><button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2 mb-2 mt-3">Find a JOB</button></Link>
          
          
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
          <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
        </div>
      </div>
     
    </section>
    
  )
}
