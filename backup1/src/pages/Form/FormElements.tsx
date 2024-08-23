import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

const FormElements = () => {
  return (
    <>
      <Breadcrumb pageName="Add New Doctor" />

      <div className="grid rounded-[10px] border border-stroke shadow-default">
  <div className="flex flex-col gap-9">
    {/* <!-- New Doctor Registration Form --> */}
    <div className="rounded-[10px] border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">  
      <h2 className="text-title-md2 font-semibold text-black pl-6 pt-6 pb-6">Personal Information</h2>
      <div className="border-b-2 border-gray my-8">
      <form className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white shadow-lg">
        {/* First Div: Upload Image */}
        <div className="flex flex-col items-center justify-center">
          <label className="block mb-4 text-lg font-semibold text-gray-700">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Second Div: First set of Input Fields */}
        <div className="flex flex-col gap-4">
          <div>
            <label className="block mb-1 text-gray-700">First Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Last Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Mobile No</label>
            <input
              type="tel"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Third Div: Second set of Input Fields */}
        <div className="flex flex-col gap-4">
          <div>
            <label className="block mb-1 text-gray-700">City</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Gender</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Date of Birth</label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Language</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Nationality</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </form>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default FormElements;
