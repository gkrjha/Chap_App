import mongoose  from "mongoose";


const connectToMongoDB=async()=>{
  try{
    await mongoose.connect(process.env.Conntection)
    console.log("Connected to database")
  }catch(err){
    console.log("ERROR to connect database",err.message)
  }
}

export default connectToMongoDB
