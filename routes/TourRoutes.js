const express = require('express')
const router = express.Router();
const tourControllers=require('../Controllers/tourController')
const {protect}=require('../midleware/authmidleware')

router.post("/NewTour",protect,tourControllers.NewTour) ;
module.exports=router ;