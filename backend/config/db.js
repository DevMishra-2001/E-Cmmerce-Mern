import mongoose from "mongoose";

export const ConnectMongoDB = () => {
mongoose.connect(process.env.MONGO_URI).then((data) => {
    console.log(`MongoDB is connected with server successfully!!${data.connection.host}`);
}).catch((err) => {
    console.log(err.message);
});
}
