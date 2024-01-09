import mongoose from "mongoose";
export const Connection = async (USERNAME,PASSWORD) => {
  
  const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@ecommerce-web.5cvviki.mongodb.net/`;
  try {
    await mongoose.connect(URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with database ", error.message);
  }
};
