import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO as string);
  } catch (error) {
    throw new Error("Failed to connect");
  }
};
export default connect


