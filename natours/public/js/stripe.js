/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';

export const bookTour = async (tourID) => {
  try {
    // 1) Get checkout session from API
    const stripe = Stripe(
      'pk_test_51NvEJiHQtv4dswj4fUcwmzJWZUANEw4mbFo4UFP8LNNeWnIZQNGVbSelJwk2lwJhM2mCd1sPBRbag5nMqt9FyPWh00pWgeqkSJ'
    );

    const session = await axios({
      url: `http://127.0.0.1:8000/api/v1/bookings/checkout-session/${tourID}`,
    });
    console.log(session);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
