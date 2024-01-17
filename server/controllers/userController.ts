import { Request, Response, NextFunction } from "express";
import User from "../models/userModels";
import Profile from "../models/profileModels";
import * as bcrypt from "bcryptjs";
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
      console.error(err);
      return res.status(400).send({
        message: err,
      });
    });
};

export const login = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user || !(user as any).comparePassword(req.body.password)) {
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
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
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

export const profile = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).json({ message: "Invalid token" });
    }

    const userProfile = await Profile.findOne({ userId: user._id });

    if (userProfile) {
      const completeProfile = {
        user: user,
        profile: userProfile,
      };

      return res.json(completeProfile);
    } else {
      return res.status(404).json({ message: "Profile not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
