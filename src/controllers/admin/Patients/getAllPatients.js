const Patient = require('../../../models/patient');
const ApiError = require('../../../utills/apiError');

const getAllPatients = async (req, res, next) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    console.error('Get All Patients error:', error);
    next(new ApiError(500, 'Server error', true, error.message));
  }
};

module.exports = { getAllPatients };
