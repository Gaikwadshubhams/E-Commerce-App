import mongoose from "mongoose";
import colors from "colors";
import DB_NAME from "../constant.js";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGODB_UIR}/${DB_NAME}`);
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`);
  }
};

export default connectDB;
