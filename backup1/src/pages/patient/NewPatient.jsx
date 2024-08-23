import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { useState } from 'react';

const NewPatient = () => {
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
                {/* Registration Form */}

                <Breadcrumb pageName="New Patient" />
       
          <div className="mt-10 p-6 mx-auto bg-white rounded-md shadow-lg">
          
            <form>
             

              <div className="grid mt-6">
                <div className="flex flex-col gap-9">
                  <div className="">
                    <h2 className="text-title-md2 font-semibold text-black pl-6 pt-6 pb-6">
                      Personal Information
                    </h2>
                    <div className="border-b-2 border-gray my-8"></div>
                    <form className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6">
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
                            placeholder="Patient Weight"
                          />
                        </div>
                      </div>

                      {/* Third Div: Second set of Input Fields */}
                      <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
                        <div>
                          <input
                            type="date"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Birthday"
                          />
                        </div>
                        <div>
                          <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="" disabled selected>
                              Martial Status
                            </option>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                          </select>
                        </div>
                        <div>
                          <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="" disabled selected>
                              Sex
                            </option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                        <div>
                          <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="" disabled selected>
                              Blood Group
                            </option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                          </select>
                        </div>
                        <div>
                          <input
                            type="number"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Patient Height"
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
                      <div className="col-span-12 flex justify-end mt-4">
                  <button
                    type="save"
                        className="bg-customPurple text-white px-4 py-2 rounded-lg hover:bg-opacity-90"
                    
                  >
                    Save
                  </button>
                </div>
                    </form>
                   
                  </div>
                
                </div>
                
              </div>
            </form>
          </div>
          <div className="mt-10 p-6 mx-auto bg-white rounded-md shadow-lg">
            <h2 className="text-title-md2 font-semibold text-black pl-6 pt-6 pb-6">
              Medical Information
            </h2>
            <div className="border-b-2 border-gray my-8"></div>
            <div className="container mx-auto p-4">
              <form className="grid grid-cols-12 gap-4">
                {/* Placeholder 1 */}
                <div className="col-span-6">
                  <label
                    htmlFor="placeholder1"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Known Disease
                  </label>
                  <select className="mt-1 block w-full p-2 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="" disabled selected>
                      Type 1 Diabetes
                    </option>
                    <option value="Maroc">Multiple Sclerosis</option>
                    <option value="Tunisie">Rheumatoid Arthritis</option>
                    <option value="Algerier">Allergies & Asthma</option>
                  </select>
                </div>
                {/* Placeholder 2 */}
                <div className="col-span-6">
                  <label
                    htmlFor="placeholder4"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Period
                  </label>
                  <input
                    type="text"
                    id="placeholder4"
                    className="mt-1 block w-full p-2 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="period"
                  />
                </div>

                {/* Placeholder 3 */}
                <div className="col-span-6">
                  <label
                    htmlFor="placeholder2"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Family History
                  </label>
                  <select className="mt-1 block w-full p-2 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="Mother">Mother</option>
                    <option value="Father">Father</option>
                    <option value="Brother">Brother</option>
                    <option value="Sister">Sister</option>
                  </select>
                </div>

                {/* Placeholder 4 */}
                <div className="col-span-6">
                  <label
                    htmlFor="placeholder3"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Diseases
                  </label>
                  <select className="mt-1 block w-full p-2 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="" disabled selected>
                      Type 1 Diabetes
                    </option>
                    <option value="Maroc">Multiple Sclerosis</option>
                    <option value="Tunisie">Rheumatoid Arthritis</option>
                    <option value="Algerier">Allergies & Asthma</option>
                  </select>
                </div>

                {/* Save Button */}
                <div className="col-span-12 flex justify-end mt-4">
                  <button
                    type="save"
                    className="bg-customPurple text-white px-4 py-2 rounded-lg hover:bg-opacity-90">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        
      </div>
    </>
  );
};

export default NewPatient;
