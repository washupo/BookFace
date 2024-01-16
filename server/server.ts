import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import jsonwebtoken from "jsonwebtoken";
import routes from "./routes/userRoute";

import { connectToDB } from "./config/db";
import { Request, Response, NextFunction } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

interface RequestWithUser
  extends Request<ParamsDictionary, any, any, ParsedQs> {
  user?: any; // or the type of your user if you have one
}

const app = express();
const port = process.env.PORT || 8000;

const option = {
  socketTimeoutMS: 30000,
  keepAlive: true,
  reconnectTries: 30000,
};

const mongoURI = process.env.MONGODB_URI;
mongoose
  .connect(
    "mongodb+srv://washupo:Tu6q0SYQcKxsmLBR@bookface.diverrj.mongodb.net/?retryWrites=true&w=majority",
    option
  )
  .then(
    () => {
      // Connected successfully
    },
    (err) => {
      // Handle error
    }
  );

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req: RequestWithUser, res: Response, next: NextFunction) {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    jsonwebtoken.verify(
      req.headers.authorization.split(" ")[1],
      "RESTFULAPIs",
      function (err, decode) {
        if (err) req.user = undefined;
        req.user = decode;
        next();
      }
    );
  } else {
    req.user = undefined;
    next();
  }
});

routes(app);

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

app.listen(port, () => {
  console.log("RESTful API server started on: " + port);
});

export default app;
