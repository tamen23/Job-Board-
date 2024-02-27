import React, {useEffect, useState} from 'react';
import AdvertisementsAPI from '../../Requests/AdvertisementsAPI';
import FindLoading from "./FindLoading.jsx";
import axios from "axios";

// AdvertisementCard component
function AdvertisementCard({ title, description, fullDescription, wages, place, workingTime }) {

  const [expanded, setExpanded] = useState(false);
  const [isApplying, setIsApplying] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSendApplication = async () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setPopupMessage('Please fill in all fields.');
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 500);
    } else {
      const applicationData = {
        jobTitle: title,
        ...formData,
      };
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      const response = await axios.post('http://localhost:8000/api/job_applications', formData, {
        headers: {
          'Content-Type': 'application/ld+json', // Set the correct content type
        },
      });
      console.log(response);
      setIsApplying(false);
      setPopupMessage('You have applied successfully.');
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 500);
    }
  };

  const handleCancelApplication = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    setIsApplying(false);
    setPopupMessage('You have canceled the operation.');
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 500);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };



  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4  ">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        {expanded && (
          <div>

            <p>Working Time: {workingTime.name}</p>
          </div>
        )}
      </div>
      <div className="flex justify-between px-6 py-4 ">
        <button
          onClick={toggleExpand}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5"
        >
          {expanded ? 'Collapse' : 'Learn More'}
        </button>
        <button
          onClick={() => setIsApplying(true)}
          className="bg-green-500 hover.bg-green-700 text-white font-bold py-2 px-4 rounded ml-5"
        >
          Apply
        </button>
      </div>
      {isApplying && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-10">
          <div className="bg-white p-8 rounded shadow-md relative">
            <button
              onClick={() => setIsApplying(false)}
              className="text-gray-700 text-2xl hover:text-gray-900 absolute top-0 left-0 m-4"
            >
              &#8592; {/* Unicode for the left arrow */}
            </button>
            <h2 className="text-2xl font-bold mb-4">Apply for {title}</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus-outline-none focus-shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus-outline-none focus-shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Phone:</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus-outline-none focus-shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus-outline-none focus-shadow-outline"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleCancelApplication}
                className="bg-red-500 hover.bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSendApplication}
                className="bg-green-500 hover.bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-10">
          <div className="bg-white p-4 rounded shadow-md">{popupMessage}</div>
        </div>
      )}
    </div>
  );
}

// Pagination component

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <nav className='bg-white'>
      <ul className="flex justify-center items-center my-4">
        {currentPage > 1 && (
          <li>
            <a
              href="#"
              className={` font-bold text-gray-700 bg-gray-100 border border-gray-700 p-2 rounded-l-lg ${
                'hover:bg-gray-100 hover-text-gray-700 dark-bg-gray-800 dark-border-gray-700 dark-text-gray-400 dark-hover-bg-gray-700 dark-hover-text-white'
              }`}
              onClick={() => onPageChange(currentPage - 1)}
            >
              &#8249; Previous
            </a>
          </li>
        )}
        <li>
          <span
            className={`font-bold text-gray-700 bg-gray-100 border border-gray-700 p-2 ${
              'rounded-none'
            } ${
              'hover:bg-gray-100 hover-text-gray-700 dark-bg-gray-800 dark-border-gray-700 dark-text-gray-400 dark-hover-bg-gray-700 dark-hover-text-white'
            }`}
          >
            {currentPage}/{totalPages}
          </span>
        </li>
        {currentPage < totalPages && (
          <li>
            <a
              href="#"
              className={`font-bold text-gray-700 bg-gray-100 border border-gray-700 p-2 rounded-r-lg `}
              onClick={() => onPageChange(currentPage + 1)}
            >
              Next &#8250;
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

function Find() {
  // Example job data, replace with your actual data
  const jobData = [
    {
      title: 'Job 133',
      description: 'Job description 1',
      fullDescription: 'Full job description 1',
      wages: '$50,000 - $60,000',
      place: 'New York, NY',
      workingTime: 'Full-time',
    },
    {
      title: 'Job 2',
      description: 'Job description 2',
      fullDescription: 'Full job description 2',
      wages: '$45,000 - $55,000',
      place: 'Los Angeles, CA',
      workingTime: 'Part-time',
    },
    {
      title: 'Job 133',
      description: 'Job description 1',
      fullDescription: 'Full job description 1',
      wages: '$50,000 - $60,000',
      place: 'New York, NY',
      workingTime: 'Full-time',
    },
    {
      title: 'Job 2',
      description: 'Job description 2',
      fullDescription: 'Full job description 2',
      wages: '$45,000 - $55,000',
      place: 'Los Angeles, CA',
      workingTime: 'Part-time',
    },{
      title: 'Job 133',
      description: 'Job description 1',
      fullDescription: 'Full job description 1',
      wages: '$50,000 - $60,000',
      place: 'New York, NY',
      workingTime: 'Full-time',
    },
    {
      title: 'Job 2',
      description: 'Job description 2',
      fullDescription: 'Full job description 2',
      wages: '$45,000 - $55,000',
      place: 'Los Angeles, CA',
      workingTime: 'Part-time',
    },{
      title: 'Job 133',
      description: 'Job description 1',
      fullDescription: 'Full job description 1',
      wages: '$50,000 - $60,000',
      place: 'New York, NY',
      workingTime: 'Full-time',
    },
    {
      title: 'Job 2',
      description: 'Job description 2',
      fullDescription: 'Full job description 2',
      wages: '$45,000 - $55,000',
      place: 'Los Angeles, CA',
      workingTime: 'Part-time',
    },{
      title: 'Job 133',
      description: 'Job description 1',
      fullDescription: 'Full job description 1',
      wages: '$50,000 - $60,000',
      place: 'New York, NY',
      workingTime: 'Full-time',
    },
    {
      title: 'Job 2',
      description: 'Job description 2',
      fullDescription: 'Full job description 2',
      wages: '$45,000 - $55,000',
      place: 'Los Angeles, CA',
      workingTime: 'Part-time',
    },
    {
      title: 'IT Job 1',
      description: 'IT job description 1',
      fullDescription: 'Full IT job description 1',
      wages: '$60,000 - $70,000',
      place: 'San Francisco, CA',
      workingTime: 'Full-time',
    },
    {
      title: 'IT Job 2',
      description: 'IT job description 2',
      fullDescription: 'Full IT job description 2',
      wages: '$55,000 - $65,000',
      place: 'Seattle, WA',
      workingTime: 'Part-time',
    },
    {
      title: 'IT Job 3',
      description: 'IT job description 3',
      fullDescription: 'Full IT job description 3',
      wages: '$70,000 - $80,000',
      place: 'Austin, TX',
      workingTime: 'Full-time',
    },
    // Add more job data here
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const [loading, setLoading] = useState(true)

  const [advertisementsList, setAdvertisementsList] = useState([])

  const jobsPerPage = 4;

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = advertisementsList.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(jobData.length / jobsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };



  const fetchAdvertisements = async () => {
    try{
      const data = await AdvertisementsAPI.findAllAdvertisements()
      console.log(data)
      setAdvertisementsList(data)
      setLoading(false)
    } catch(error){
      console.log(error.response)
    }
  }
  useEffect(() => {
    fetchAdvertisements()

  }, [])

  return (
      <>
        <div className='m-auto px-4 py-6' >
          { !loading && (
              <div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 ">
                  {currentJobs.map((job, index) => (
                      <AdvertisementCard key={index} {...job} />
                  ))}
                </div>
                {/* Centered Pagination Component */}
                <div className="flex justify-center mt-4 mb-2">
                  <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                </div>
              </div>
          )}
          { loading && <FindLoading />}
        </div>
      </>
  );
}

export default Find;
