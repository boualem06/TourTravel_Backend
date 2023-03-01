const express = require('express')
const router = express.Router();
const tourControllers=require('../Controllers/tourController')
const {protect}=require('../midleware/authmidleware')

router.post("/NewTour",protect,tourControllers.NewTour) ;
router.get("/getTours",protect,tourControllers.getTours) ;
router.get("/getTours/:tourId",protect,tourControllers.getTourById) ;
router.delete("/deleteTourById",protect,tourControllers.deleteTour) ;
router.get("/searchTour/:address/:distance/:maxGroupSize",protect,tourControllers.searchTour) ;

module.exports=router ;