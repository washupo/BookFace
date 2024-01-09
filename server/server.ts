//Importing libraries
require('dotenv').config();

let express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const http = require('http');

const app = express();

//Importing the connectToDB function (main entry to the project) + running the function
import { connectToDB } from './config/db';
connectToDB();

// adding node features
// middleware to parse the body of the request
app.use(express.json({ limit: "50mb" }));

// middleware to parse the urlencoded data
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// cors middleware
if (!process.env.NODE_ENV) {
    throw new Error('NODE_ENV is not defined');
  }
let origin = process.env.NODE_ENV; // Update with React app's URL
// const origin = process.env.NODE_ENV !== "production" ? "http://localhost:5173" : "https://www.example.com";

app.use(
    cors({
        origin: origin,
        credentials: true,
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        allowedHeaders: "Content-Type, Authorization",
    })
);

// cookie parser middleware
app.use(cookieParser());

// importing the routes
const auth = require("./routes/authRoutes");

// using the routes
app.use("/api/auth", auth);

// importing the verifyToken middleware + applying the verifyToken middleware
//const verifyToken = require("./middlewares/authMiddleware");
//app.use("/api/auth/profile", verifyToken);

const server = http.createServer(app);

const PORT = process.env.PORT || 8000;

// listening to the server and logging the port
server.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
});