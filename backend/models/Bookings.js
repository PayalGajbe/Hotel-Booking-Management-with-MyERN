// models/Booking.js
class Booking {
    constructor(name, room_type, check_in, check_out, num_members, total_price) {
      this.name = name;
      this.room_type = room_type;
      this.check_in = check_in;
      this.check_out = check_out;
      this.num_members = num_members;
      this.total_price = total_price;
    }
  }
  
  module.exports = Booking;