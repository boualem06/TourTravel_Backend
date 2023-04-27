const Review=require('../models/Review')

const NewReview=async(req,res)=>{
   
    const {productId,reviewText,rating}=req.body  ;
    console.log(productId)
    username=req.user.name
    if(!productId  || !reviewText || !rating )
    {
        res.status(400) ;
        res.json( {message:"please add all fields",status:400})
        return ;
    }


    const review=await Review.create({
        productId,
        username,
        reviewText,
        rating,
    })


    res.status(201).json({
        _id:review.id,
        productId:review.productId,
        username:req.user.name ,
        reviewText:review.reviewText ,
        rating:review.rating ,
    })
}


const getTourReviews=async(req,res)=>{
    const tours=await Review.find({
        productId:req.params.productId
    })
    res.status(200).json(
        tours
    )
}
module.exports={
    NewReview,
    getTourReviews
}
