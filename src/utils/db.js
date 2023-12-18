// connect to mongodb
import mongoose from "mongoose";
const connect = async () => {
    try {
        await mongoose.connect( process.env.MONGODB_URI)
    } catch (error) {
        console.log(error)
        throw new Error("Connection failed");
    }
};
export default connect;