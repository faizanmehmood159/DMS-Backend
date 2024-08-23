const Doctor = require('../../../models/doctor');
const ApiError = require('../../../utills/apiError');

// Delete Doctor by ID
const deleteDoctor = async (req, res, next) => {
  const { id } = req.params;

  try {
    const doctor = await Doctor.findByIdAndDelete(id);
    if (!doctor) {
        const errorMsg = 'Doctor not found';
      console.error(errorMsg);
      return res.status(404).json({ error: 'Doctor not found' });
    }
    res.status(200).json({ message: 'Doctor deleted successfully' });
  } catch (error) {
    console.error('Delete Doctor error:', error);
    next(new ApiError(500, 'Server error', true, error.message));
  }
};

module.exports = { deleteDoctor };
