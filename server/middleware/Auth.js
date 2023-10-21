const catchAsyncErrors = require('./CatchAsyncErrors');
const ErrorHandler = require('../utils/ErrorHandler');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.checkUserAuthentication = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  console.log(token)
  if (!token) {
    return next(
      new ErrorHandler('Please login again to access this resource', 401)
    );
  }

  const decodedData = await jwt.verify(token,process.env.JWT_TOKEN);
  const user = await User.findById(decodedData.id);
  if (!user) {
    new ErrorHandler('User not found', 401);
  }
  req.user = user;
  next();
});
