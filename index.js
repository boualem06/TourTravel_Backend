const express = require('express')
const { default: mongoose } = require('mongoose')
const UserRoutes = require("./routes/UserRoutes") ;
 const TourRoutes=require("./routes/TourRoutes") ;
 const ReviewRoutes=require("./routes/ReviewRoutes") ;
 const BookingRoutes=require("./routes/BookingRoutes") ;
const app = express()
const cors = require("cors");
require("dotenv").config();

const port = 5000
const dbURI="mongodb+srv://Boualem:boualemhamroune1649@cluster0.k6dt8jm.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => { console.log("connected to db"); app.listen(port); })
  .catch((err) => { console.log(err) });

app.use(cors()) ;
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static('public'));
app.use(UserRoutes);
app.use(TourRoutes)
app.use(ReviewRoutes)
app.use(BookingRoutes)


