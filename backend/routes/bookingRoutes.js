
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController.js');

router.post('/bookings', bookingController.createBooking);
router.get('/fetch-bookings', bookingController.getBookings);
router.put('/bookings/:id', bookingController.updateBooking);
router.delete('/bookings/:id', bookingController.deleteBooking);

module.exports = router;