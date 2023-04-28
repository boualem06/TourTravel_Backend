const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
    {
        productId: {
            type: mongoose.Types.ObjectId,
            ref: "tourModel",
        },
        username: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        Guests: {
            type: Number,
            required: true,
        },
        total: {
            type: Number,
            required: true,
        },
        title:{
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

// export default mongoose.model("Review", reviewSchema);
const Book = mongoose.model('Book', bookSchema);
module.exports = Book;