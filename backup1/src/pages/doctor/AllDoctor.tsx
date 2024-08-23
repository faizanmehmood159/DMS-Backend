import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const AllDoctor = () => {
  const [image, setImage] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleAddDoctorClick = () => {
    setShowForm(true);
  };
  

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <div className="relative">
        {/* Button on the top-right corner */}
        <button
          className="absolute top-6 mb-6 right-0 mt-4 mr-4 bg-customPurple text-white px-4 py-2 rounded-lg hover:bg-opacity-90"
          onClick={handleAddDoctorClick}
        >
          Add Doctor
        </button>

        {/* Registration Form */}
        {showForm ? (
          <div>
          <div className="mt-10 p-6 mx-auto bg-white rounded-md shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Doctor Registration</h2>
            <form>
  <Breadcrumb  pageName="Add Doctor" />

  <div className="grid rounded-[10px] border mt-6 border-stroke shadow-default">
    <div className="flex flex-col gap-9">
      <div className="rounded-[10px] border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <h2 className="text-title-md2 font-semibold text-black pl-6 pt-6 pb-6">
          Personal Information
        </h2>
        <div className="border-b-2 border-gray my-8"></div>
        <form className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 bg-white shadow-lg">
  {/* First Div: Upload Image */}
  <div className="col-span-12 md:col-span-4 flex flex-col items-center justify-center">
  <div>
      <input
        type="file"
        accept="image/*"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleFileChange}
      />
      {image && (
        <img
          src={image}
          alt="Uploaded Preview"
          className="mt-4 w-full h-auto border border-gray-300 rounded-md"
        />
      )}
    </div>
  </div>

  {/* Second Div: First set of Input Fields */}
  <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
    <div>
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="First Name"
      />
    </div>
    <div>
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Last Name"
      />
    </div>
    <div>
      <input
        type="email"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Email"
      />
    </div>
    <div>
      <input
        type="tel"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Mobile No"
      />
    </div>
    <div>
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="City"
      />
    </div>
  </div>

  {/* Third Div: Second set of Input Fields */}
  <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
    <div>
      <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="" disabled selected>Choose a Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
    <div>
      <input
        type="date"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Date of Birth"
      />
    </div>
    <div>
      <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="" disabled selected>Languages</option>
        <option value="English">English</option>
        <option value="French">French</option>
        <option value="German">German</option>
        <option value="Arabic">Arabic</option>
      </select>
    </div>
    <div>
      <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="" disabled selected>Nationality</option>
        <option value="Maroc">Maroc</option>
        <option value="Tunisie">Tunisie</option>
        <option value="Algerier">Algerier</option>
        <option value="Egypt">Egypt</option>
      </select>
    </div>
    <div>
      <input
        type="number"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Zip"
      />
    </div>
  </div>

  {/* Fourth Div: User Role and Bio */}
  <div className="col-span-12 md:col-span-8 md:col-start-5 flex flex-col gap-4">
    <div>
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="User Role"
      />
    </div>
  </div>

  {/* Address and Bio Divs */}
  <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
    <div>
      <textarea
        rows="3"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Address"
      />
    </div>
  </div>
  <div className="col-span-12 md:col-span-8 flex flex-col gap-4">
    <div>
      <textarea
        rows="3"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Bio"
      />
    </div>
  </div>
</form>

        
      </div>
    </div>
    <button
    type="submit"
    className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
  >
    Submit
  </button>
  </div>

            </form>

          </div>
          <div className="mt-10 p-6 mx-auto bg-white rounded-md shadow-lg">
          <h2 className="text-title-md2 font-semibold text-black pl-6 pt-6 pb-6">Medical Information</h2>
          <div className="border-b-2 border-gray my-8"></div>
          <div className="container mx-auto p-4">
      <form className="grid grid-cols-12 gap-4">
        {/* Placeholder 1 */}
        <div className="col-span-6">
          <label htmlFor="placeholder1" className="block text-sm font-medium text-gray-700">
            Main Specialization
          </label>
          <select className="mt-1 block w-full p-2 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="" disabled selected>Type 1 Diabetes</option>
        <option value="Maroc">Multiple Sclerosis</option>
        <option value="Tunisie">Rheumatoid Arthritis</option>
        <option value="Algerier">Allergies & Asthma</option>
      </select>
          
        </div>

        {/* Placeholder 2 */}
        <div className="col-span-6">
          <label htmlFor="placeholder2" className="block text-sm font-medium text-gray-700">
            Secondary Specialization
          </label>
          <select className="mt-1 block w-full p-2 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="" disabled selected>Secondary Specialization</option>
        <option value="Maroc">Celiac Disease</option>
        <option value="Tunisie">Cancer</option>
        <option value="Algerier">Catarrh</option>
        <option value="Algerier">Conjunctivitis</option>
      </select>
        </div>

        {/* Placeholder 3 */}
        <div className="col-span-6">
          <label htmlFor="placeholder3" className="block text-sm font-medium text-gray-700">
            Medical Education
          </label>
          <select className="mt-1 block w-full p-2 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="" disabled selected>Medical University</option>
        <option value="Maroc">Medical College</option>
        <option value="Tunisie">Nurse School</option>
      </select>
        </div>

        {/* Placeholder 4 */}
        <div className="col-span-6">
          <label htmlFor="placeholder4" className="block text-sm font-medium text-gray-700">
            Period
          </label>
          <input
            type="text"
            id="placeholder4"
            className="mt-1 block w-full p-2 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="period"
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-12 flex justify-end mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
            </div>
            </div>
        ) : (
          <>
            <Breadcrumb pageName="All Doctor" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 rounded-[10px] border my-20 border-stroke shadow-default">
      {/* Card 1 */}
      <div className="flex flex-col gap-9">
        <Card className="w-full">
          <CardHeader floated={false} className="h-80">
            <img
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Natalie Paisley
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              CEO / Co-Founder
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Like">
              <a href="#facebook" className="text-blue-500">
                <FaFacebook />
              </a>
            </Tooltip>
            <Tooltip content="Follow">
              <a href="#twitter" className="text-light-blue-500">
                <FaTwitter />
              </a>
            </Tooltip>
            <Tooltip content="Follow">
              <a href="#instagram" className="text-purple-500">
                <FaInstagram />
              </a>
            </Tooltip>
          </CardFooter>
        </Card>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col gap-9">
        <Card className="w-full">
          <CardHeader floated={false} className="h-80">
            <img
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Alex Johnson
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              CTO / Co-Founder
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Like">
              <a href="#facebook" className="text-blue-500">
                <FaFacebook />
              </a>
            </Tooltip>
            <Tooltip content="Follow">
              <a href="#twitter" className="text-light-blue-500">
                <FaTwitter />
              </a>
            </Tooltip>
            <Tooltip content="Follow">
              <a href="#instagram" className="text-purple-500">
                <FaInstagram />
              </a>
            </Tooltip>
          </CardFooter>
        </Card>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col gap-9">
        <Card className="w-full">
          <CardHeader floated={false} className="h-80">
            <img
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Sarah Connor
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              COO
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Like">
              <a href="#facebook" className="text-blue-500">
                <FaFacebook />
              </a>
            </Tooltip>
            <Tooltip content="Follow">
              <a href="#twitter" className="text-light-blue-500">
                <FaTwitter />
              </a>
            </Tooltip>
            <Tooltip content="Follow">
              <a href="#instagram" className="text-purple-500">
                <FaInstagram />
              </a>
            </Tooltip>
          </CardFooter>
        </Card>
      </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AllDoctor;
