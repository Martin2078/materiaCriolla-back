import User from '../models/User.js';
async function findEmail(req, res, next) {
  const { email } = req.body;
  try {
    const userEmail = await User.findOne({ email });
    if (userEmail) {
      return res.status(400).json({
        success: false,
        message: 'Email already exists',
      });
    }
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Server Error',
    });
  }
}

export default findEmail;