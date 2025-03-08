import  mongoose from 'mongoose';
 
// export const connectDB = async () => {
//     try{
//         console.log("mongo_uri:",process.env.mongodb+srv);
//         const conn=await mongoose.connect(process.env.mongodb+srv)
//         console.log(`MongoDb Connected :${conn.connection.host}`)

//     }
//     catch(error){
//         console.log("Error connection to MongoDB:",error.messsage)
//         process.exit(1) // failure ,0 status code is success
//     }
// };


export const connectDB = async () => {
    try {
        console.log("mongo_uri:",process.env.MONGO_URI);
        const conn = await mongoose.connect(process.env.MONGO_URI, {
          
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`MongoDB connection error: ${error.message}`);
        process.exit(1);
    }
};


