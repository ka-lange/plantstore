// const mongoose = require("mongoose");

// const CartSchema = new mongoose.Schema(
//   {
//     userId: {
//       type: String, //this neeeds fixing
//       ref: "User"
//     },
//     username:{
//         type: String,
//     },
//     //array of products chosen
//     products: [
//       {
//         plantId: String,
//         commonName: String,
//         // quantity: Number,
//         // name: String,
//         price: Number
//       }
//     ],
//     active: {
//       type: Boolean,
//       default: true
//     },
//     modifiedOn: {
//       type: Date,
//       default: Date.now
//     }
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Cart", CartSchema);