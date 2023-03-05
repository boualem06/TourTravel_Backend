const  mongoose  = require('mongoose') ;

const reviewSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "tourModel",
    },
    username: {
      type: String,
      required: true,
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

// export default mongoose.model("Review", reviewSchema);
const Review=mongoose.model('Review',reviewSchema) ;
module.exports=Review ;