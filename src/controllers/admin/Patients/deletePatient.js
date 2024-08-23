const Patient = require('../../../models/patient');
const ApiError = require('../../../utills/apiError');

const deletePatient = async (req, res, next) => {
  const { id } = req.params;

  try {
    const patient = await Patient.findByIdAndDelete(id);
    if (!patient) {
      const errorMsg = 'Patient not found';
      console.error(errorMsg, { id });
      return res.status(404).json({ error: errorMsg });
    }

    res.status(200).json({ message: 'Patient deleted successfully' });
  } catch (error) {
    console.error('Delete Patient error:', error);
    next(new ApiError(500, 'Server error', true, error.message));
  }
};

module.exports = { deletePatient };
