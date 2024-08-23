import { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

const NewPrescription = () => {
    const [drugForms, setDrugForms] = useState([]);
    const [testForms, setTestForms] = useState([]);
    const handleButtonClick = () => {
        setDrugForms([...drugForms, { type: '', drug: '', mg: '', dose: '', duration: '', comment: '' }]);
    };

    const handleTestButtonClick = () => {
        setTestForms([...testForms, { type: '', test: '', comment: '' }]);
    };
    return (
        <>
            <Breadcrumb pageName="New Prescription" />
            <div className="rounded-[10px] border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <h2 className="text-title-md2 font-semibold text-black pl-6 pt-6 pb-6">Patient Informations</h2>
                <div className="border-b-2 border-gray my-8"></div>
                <div className='px-8 py-6'>
                    <select className="block w-full rounded-sm border-0 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                        <option value="" disabled selected>Full Name</option>
                        <option value="Danish">Danish</option>
                        <option value="Ehtisham">Ehtisham</option>
                        <option value="Faizan">Faizan</option>
                        <option value="Furqan">Furqan</option>
                    </select>
                </div>
            </div>

            {/* Drug List Div */}
            <div className="relative rounded-[10px] border mt-8 border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <h2 className="text-title-md2 font-semibold text-black pl-6 pt-6 pb-6">Drugs List</h2>
                <div className="border-b-2 border-gray my-8"></div>

                {/* Render drug forms */}
                {drugForms.map((form, index) => (
                    <div key={index} className="p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                            <div className="col-span-1 sm:col-span-2">
                                <input
                                    type="text"
                                    placeholder="Type"
                                    className="block w-full rounded-md border-0 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div className="col-span-1 sm:col-span-7">
                                <select className="block w-full rounded-md border-0 px-4 py-4 pr-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                    <option value="" disabled selected>Select Drug...</option>
                                    <option value="csdfsff">csdfsff</option>
                                    <option value="Test Trade Name">Test Trade Name</option>
                                </select>
                            </div>
                            <div className="col-span-1 sm:col-span-3">
                                <input
                                    type="text"
                                    placeholder="MG/MI"
                                    className="block w-full rounded-md border-0 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 mt-4">
                            <div className="col-span-1 sm:col-span-6">
                                <input
                                    type="text"
                                    placeholder="Dose"
                                    className="block w-full rounded-md border-0 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div className="col-span-1 sm:col-span-6">
                                <input
                                    type="text"
                                    placeholder="Duration"
                                    className="block w-full rounded-md border-0 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 mt-4">
                            <div className="col-span-1 sm:col-span-12">
                                <input
                                    type="text"
                                    placeholder="Advice/Comment"
                                    className="block w-full rounded-md border-0 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                ))}

                {/* Add Drug Button */}
                <div className='p-6 flex justify-end'>
                    <button
                        className="bg-customPurple text-white px-4 py-2 rounded-lg hover:bg-opacity-90"
                        onClick={handleButtonClick}
                    >
                        Add Drug
                    </button>
                </div>
            </div>

            {/* Drug Test List  */}
            <div className="rounded-[10px] border mt-8 border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <h2 className="text-title-md2 font-semibold text-black pl-6 pt-6 pb-6">Tests List</h2>
                <div className="border-b-2 border-gray my-8"></div>
                { testForms.map((form, index) => (
                    <div className="grid p-6 grid-cols-1 sm:grid-cols-12 gap-4 mt-4">
                            <div className="col-span-1 sm:col-span-6">
                            <select className="block w-full rounded-md border-0 px-4 py-4 pr-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                    <option value="" disabled selected>Select Test...</option>
                                    <option value="Scanner Thorasciquee">Scanner Thorasciquee</option>
                                    <option value="Covid 19">Covid 19</option>
                                    <option value="Throat Paid">Throat Paid</option>
                                    <option value="Kidney Issue">Kidney Issue</option>
                                    <option value="Asthama">Asthama</option>
                                    <option value="Knee Injury">Knee Injury</option>
                                    <option value="Abdf">Abdf</option>
                                    <option value="Rqf">Rqf</option>
                                    
                                </select>
                            </div>
                            <div className="col-span-1 sm:col-span-6">
                                <input
                                    type="text"
                                    placeholder="Description"
                                    className="block w-full rounded-md border-0 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div className="border-b-2 mx-6 border-gray "></div>
                </div> 
                  
                ))}
                 
                 <div className='p-6 flex justify-end'>
                    <button
                        className="bg-customPurple text-white px-4 py-2 rounded-lg hover:bg-opacity-90"
                        onClick={handleTestButtonClick}
                    >
                        Add Test
                    </button>
                </div>
            </div>
             {/* Form Handle Button  */} 
            <div className="rounded-[10px] border mt-8 border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className='p-6 flex justify-end'>
                    <button
                        className="bg-customPurple text-white px-4 py-2 rounded-lg hover:bg-opacity-90"
                        onClick={handleButtonClick}
                    >
                        Create Prescription
                    </button>
                </div>
            </div>
        </>
    );
};

export default NewPrescription;
