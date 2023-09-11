import mongoose, { connect } from "mongoose";

const connectDB = async() => {
        try {
            await mongoose.connect(process.env.DATABASE_URL)
            console.log('connected successfully');
        } catch (error) {
            console.log(error);

        }
    }
    // export default connectdb
export default connectDB;