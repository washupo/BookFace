//Importing the mongoose library used to make the mongodb connection
const mongoose = require("mongoose")

// importing the mongodb atlas link 
const MONGO_DB_URI = process.env.MONGO_REMOTE_URL;

// creating a function called connectToDB that handles the database connection 
const connectToDB = async () => {
    try {
        const DBConnection = await mongoose.connect(MONGO_DB_URI);
        console.log(`Connected to MongoDB Atlas: ${DBConnection.connection.host}`);
    } catch (error) {
        console.error((error as Error).message);
        process.exit(1);
    }
};

//exporting the connectToDB function
export { connectToDB };
