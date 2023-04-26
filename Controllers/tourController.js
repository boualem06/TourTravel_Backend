const Tour=require('../models/tourModel')


const NewTour=async(req,res)=>{
    // if(req.user.admin===false){
    //     res.status(400) ;
    //     res.json( {message:"Only admins can add New Tours ",status:400})
    //     return ;
    // }
    const {title,city,address,distance,photo,desc,price,maxGroupSize,featured}=req.body  ;

    if(!title || !city || !address || !distance || !photo || !desc || !price || !maxGroupSize || (featured!=false && featured!=true))
    {
        res.status(400) ;
        res.json( {message:"please add all fields",status:400})
        return ;
    }


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


const getTours=async (req,res)=>{
    const tours=await Tour.find() ;
    res.status(200).json({
      "toursArray":tours
    })
}

const getTourById=async (req,res)=>{
    const tour=await Tour.findById(req.params.tourId) ;
    res.status(200).json(
        tour
    )
}

const deleteTour=async(req,res)=>{
    console.log(req.body.id)
    const deletedTour= await Tour.deleteOne({_id:req.body.id})
    console.log(deletedTour)
    res.status(200).json(
        deletedTour
    )
}

const searchTour=async(req,res)=>{
    console.log(req.params.address) ;
    console.log(req.params.distance) ;
    console.log(req.params.maxGroupSize)
    const tours=await Tour.find({
        $and: [
            { address:req.params.address, },
            {  distance:req.params.distance, },
            {maxGroupSize : {$lte:req.params.maxGroupSize}}
          ]    
    })

    res.status(200).json(
        tours
    )
}


module.exports={
    NewTour,
    getTours,
    getTourById,
    deleteTour,
    searchTour
}