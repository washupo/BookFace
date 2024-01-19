import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import routes from "./routes/userRoute";
import postRoutes from "./routes/postRoute";
import cors from "cors";

import { connectToDB } from "./config/db";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

export interface RequestWithUser
  extends Request<ParamsDictionary, any, any, ParsedQs> {
  user?: any; // or the type of your user if you have one
}

const app = express();
const port = process.env.PORT || 8000;

// Call the connectToDB function
connectToDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.use(function (req: RequestWithUser, res: Response, next: NextFunction) {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    const token = req.headers.authorization.split(" ")[1];
    console.log("Token avant décodage :", token);

    jwt.verify(token, "RESTFULAPIs", function (err, decode) {
      if (err) {
        console.log("Erreur lors du décodage du token :", err);
        req.user = undefined;
      } else {
        req.user = decode;
      }
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
});

routes(app);
postRoutes(app);

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

app.listen(port, () => {
  console.log("RESTful API server started on: " + port);
});

export default app;
