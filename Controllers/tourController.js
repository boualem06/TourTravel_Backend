const Tour=require('../models/tourModel')
const {cloudinary}=require('../models/cloudinary')

const getImages = async (req, res) => {
    const { resources } = await cloudinary.search
        .expression('folder:Test')
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute();

    const publicIds = resources.map((file) => file.public_id);
    res.send(publicIds);
};

const uploadImage = async (req, res) => {
    try {
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'xeww3a1m',
        });
        return uploadResponse;
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
}

const NewTour=async(req,res)=>{
  
    const {title,city,address,distance,photo,desc,price,maxGroupSize,featured}=req.body  ;
  

    const fileStr = req.body.photo;
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: 'xeww3a1m',
    });

    const tour=await Tour.create({
        title,
        city,
        address,
        distance,
        photo:uploadResponse.public_id,
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

const getFeaturedTours=async (req,res)=>{
    const tours=await Tour.find({
        featured:true
    }) ;
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
    getFeaturedTours,
    getTourById,
    deleteTour,
    searchTour
}