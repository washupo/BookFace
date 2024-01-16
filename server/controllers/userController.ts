import { Request, Response, NextFunction } from "express";
import User from "../models/userModels";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import * as mongoose from "mongoose";
import { ParamsDictionary } from "express-serve-static-core";

import { ParsedQs } from "qs";

interface RequestWithUser
  extends Request<ParamsDictionary, any, any, ParsedQs> {
  user?: any; // or the type of your user if you have one
}

export const signup = (req: Request, res: Response) => {
  const newUser = new User({
    fullName: req.body.fullName,
    email: req.body.email,
    hash_password: bcrypt.hashSync(req.body.password, 10),
    username: req.body.username,
    species: req.body.species,
    address: req.body.address,
    gender: req.body.gender,
    created: new Date(),
  });

  newUser
    .save()
    .then((user: any) => {
      user.hash_password = undefined;
      return res.json(user);
    })
    .catch((err: any) => {
      return res.status(400).send({
        message: err,
      });
    });
};

export const login = (req: Request, res: Response) => {
  User.findOne(
    { email: req.body.email },
    (
      err: any,
      user: {
        comparePassword: (arg0: any) => any;
        email: any;
        fullName: any;
        _id: any;
      }
    ) => {
      if (err) throw err;

      if (!user || !user.comparePassword(req.body.password)) {
        return res.status(401).json({
          message: "Authentication failed. Invalid user or password.",
        });
      }

      return res.json({
        token: jwt.sign(
          { email: user.email, fullName: user.fullName, _id: user._id },
          "RESTFULAPIs"
        ),
      });
    }
  );
};

export const loginRequired = (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  if (req.user) {
    next();
  } else {
    return res.status(401).json({ message: "Unauthorized user!!" });
  }
};

export const profile = (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  if (req.user) {
    res.send(req.user);
    next();
  } else {
    return res.status(401).json({ message: "Invalid token" });
  }
};
