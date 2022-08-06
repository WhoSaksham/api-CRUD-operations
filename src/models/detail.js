const mongoose = require('mongoose')

const StdDetail = mongoose.Schema({
    name: String,
    class: Number,
    section: String,
    feesPaid: Boolean,
    attendancePercentage: Number,
    rollNo: Number
  });
  
 module.exports = mongoose.model("detail", StdDetail)