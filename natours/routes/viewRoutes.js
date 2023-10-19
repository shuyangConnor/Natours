const express = require('express');
const {
  getOverview,
  getTour,
  getLogin,
  getAccount,
  updateUserData,
  getMyTours,
  getSignUp,
} = require('../controllers/viewsController');
const { protect, isLoggedIn } = require('../controllers/authController');
const { createBookingCheckout } = require('../controllers/bookingController');

const router = express.Router();

router.get('/', createBookingCheckout, isLoggedIn, getOverview);
router.get('/tour/:slug', isLoggedIn, getTour);
router.get('/login', getLogin);
router.get('/sign-up', getSignUp);
router.get('/me', protect, getAccount);
router.get('/my-tours', protect, getMyTours);

router.post('/submit-user-data', protect, updateUserData);

module.exports = router;
