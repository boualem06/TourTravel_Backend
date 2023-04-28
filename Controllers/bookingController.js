const Book=require('../models/booking')

const NewBook=async(req,res)=>{
   console.log(req.body)
    const {productId,phone,date,Guests,total,title}=req.body  ;
    username=req.user.name
    if(!productId  || !phone || !date || !Guests || !total || !title )
    {
        res.status(400) ;
        res.json( {message:"please add all fields",status:400})
        return ;
    }


    const book=await Book.create({
        productId,
        username,
        phone,
        date,
        Guests,
        total,
        title
    })


    res.status(201).json({
        _id:book.id,
        productId:book.productId,
        username:req.user.name ,
        phone:book.phone ,
        date:book.date ,
        Guests:book.Guests ,
        total:book.total ,
        title:book.title

    })
}

const getBooks=async (req,res)=>{
    const books=await Book.find() ;
    res.status(200).json(
    books
    )
}


module.exports={
    NewBook,
    getBooks
}
