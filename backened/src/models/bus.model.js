const mongoose = require("mongoose");


const busSchema = new mongoose.Schema({
    busName: { type: String, required: true },
    totalSeat: { type: Number, required: true },
    currentOccupancy: { type: Number, default : 0 },
    availableDayOfOperation:{ type: Number, required: true },
    pickup_address: { type: String, required: true },
    drop_address: { type: String, required: true },
    distance: { type: Number, required: true },
    estimateTime:{ type: Number, required: true },
})


const Bus = mongoose.model("bus", busSchema);
module.exports = Bus;