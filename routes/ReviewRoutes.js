const express = require('express')
const router = express.Router();
const reviewControllers=require('../Controllers/reviewController')
const {protect}=require('../midleware/authmidleware')

router.post("/NewReview",protect,reviewControllers.NewReview) ;
router.get("/getTourReviews/:productId",protect,reviewControllers.getTourReviews) ;



module.exports=router ;