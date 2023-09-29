import axios from "axios";
const stripe = Stripe('pk_test_51NvEJiHQtv4dswj4fUcwmzJWZUANEw4mbFo4UFP8LNNeWnIZQNGVbSelJwk2lwJhM2mCd1sPBRbag5nMqt9FyPWh00pWgeqkSJ');

export const bookTour = async tourID => {
  // 1) Get checkout session from API
  const session = await axios({
    url: `${}api/v1/bookings/checkout-session/5c88fa8cf4afda39709c2955`
  })

  // 2) Create checkout form + charge credit card
}