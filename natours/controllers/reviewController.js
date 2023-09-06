const Review = require('../models/reviewModel');
const catchAsync = require('../utils/catchAsync');
const appError = require('../utils/appError');
const APIFeatures = require('../utils/apiFeatures');
const {
  deleteOne,
  updateOne,
  createOne,
  getOne,
  getAll,
} = require('./handlerFactory');

exports.getAllReviews = getAll(Review);

exports.setTourUserIds = (req, res, next) => {
  // Allow Nested Routes
  if (!req.body.tour) {
    req.body.tour = req.params.tourId;
  }
  if (!req.body.user) {
    req.body.user = req.user.id;
  }
  next();
};

exports.getReview = getOne(Review);
exports.createReview = createOne(Review);
exports.deleteReview = deleteOne(Review);
exports.updateReview = updateOne(Review);
