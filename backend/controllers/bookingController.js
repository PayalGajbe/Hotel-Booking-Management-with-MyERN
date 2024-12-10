// bookingController.js
//all crud operations
const db = require('../config/db.js');

//npost - add bookings
exports.createBooking = (req, res) => {
  const { name, room_type, check_in, check_out, num_members, total_price } = req.body;
  //const data = req.body;
  //console.log(data);
  const query = `INSERT INTO bookings (name, room_type, check_in, check_out, num_members, total_price) VALUES (?, ?, ?, ?, ?, ?)`;
  
  db.query(query, [name, room_type, check_in, check_out, num_members, total_price], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Booking added successfully', bookingId: result.insertId });
  });
};

// GET - Retrieve bookings
exports.getBookings = (req, res) => {
  const { room_type } = req.query;
  let query = `SELECT * FROM bookings`;
  if (room_type) query += ` WHERE room_type = ?`;
  
  db.query(query, [room_type], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

// PUT - Update booking by ID
exports.updateBooking = (req, res) => {
  const { id } = req.params;
  const { name, room_type, check_in, check_out, num_members, total_price } = req.body;
  const query = `UPDATE bookings SET name = ?, room_type = ?, check_in = ?, check_out = ?, num_members = ?, total_price = ? WHERE id = ?`;
  
  db.query(query, [name, room_type, check_in, check_out, num_members, total_price, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Booking updated successfully' });
  });
 
};

// DELETE - Delete booking by ID
exports.deleteBooking = (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM bookings WHERE id = ?`;
  
  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Booking deleted successfully' });
  });
};