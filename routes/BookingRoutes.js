const express = require('express')
const router = express.Router();
const bookControllers=require('../Controllers/bookingController')
const {protect}=require('../midleware/authmidleware')


router.post("/NewBook",protect,bookControllers.NewBook) ;
router.get("/getBooks",protect,bookControllers.getBooks) ;


module.exports=router ;