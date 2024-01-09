import { products } from "./constants/data.js"
import Product from "./models/product.schema.js";

const DefaultData=async()=>{
    try {
        
        await Product.insertMany(products);
        console.log("Default data added to the database successfully");
    } catch (error) {
        console.log('Error while inserting default data',error.message);
    }
}

export default DefaultData