
import  mongoose from 'mongoose';
const uri = "mongodb+srv://hilalaissani:<Password>@cluster0.oe5ry.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const clientOptions = { 
    serverApi: { version: '1', strict: true, deprecationErrors: true }
 } as any;
  
async function connectDB() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("====  successfully connected to MongoDB! ====");
  }
  catch(error: any){
    console.error('MongoDB connection error:', error.message);
    await  mongoose.disconnect();
    throw new Error(`MongoDB connection error:', ${error.message}`)
  }
}


export default connectDB;

