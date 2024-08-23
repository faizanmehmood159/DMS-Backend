const Doctor = require('../../../models/doctor');
const ApiError = require('../../../utills/apiError');


const getAllDoctors = async (req, res, next) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    const errorMsg = 'Doctor not found';
      console.error(errorMsg);
    console.error('Get All Doctors error:', error);
    next(new ApiError(500, 'Server error', true, error.message));
  }
};

const getDoctorById = async (req, res, next) => {
  const { id } = req.params;
  
  try {
    const doctor = await Doctor.findById(id);
    if (!doctor) {
      const errorMsg = 'Doctor not found';
      console.error(errorMsg);
      return res.status(404).json({ error: 'Doctor not found' });
    }
    res.status(200).json(doctor);
  } catch (error) {
    console.error('Get Doctor by ID error:', error);
    next(new ApiError(500, 'Server error', true, error.message));
  }
};

module.exports = { getAllDoctors, getDoctorById };
