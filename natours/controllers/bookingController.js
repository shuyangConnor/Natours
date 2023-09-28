const catchAsync = require('../utils/catchAsync');
const Tour = require('../models/tourModel');
const stripe = require('stripe');

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  // 1) Get the currently booked tour
  const tour = await Tour.findById(req.params.tourID);

  // 2) Create checkout session

  // 3) Create session as response
});
