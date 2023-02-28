const Tour=require('../models/tourModel')


const NewTour=async(req,res)=>{
    const {title,city,address,distance,photo,desc,price,maxGroupSize,featured}=req.body  ;

    // if(!title || !city || !address || !distance || !photo || !desc || !price || !maxGroupSize || !featured)
    // {
    //     res.status(400) ;
    //     res.json( {message:"please add all fields",status:400})
    //     return ;
    // }


    const tour=await Tour.create({
        title,
        city,
        address,
        distance,
        photo,
        desc,
        price,
        maxGroupSize,
        featured
    })

    res.status(201).json({
        _id:tour.id,
        title:tour.title ,
        city:tour.city ,
        address:tour.address ,
        distance:tour.distance ,
        photo:tour.photo ,
        desc:tour.desc ,
        price:tour.price ,
        maxGroupSize:tour.maxGroupSize ,
        featured:tour.featured
    })

}


module.exports={
    NewTour,
}