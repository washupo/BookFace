import { Request, Response, NextFunction } from "express";
import { User } from "../models/userModels";
import { Profile } from "../models/profileModels";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import * as mongoose from "mongoose";
import { ParamsDictionary } from "express-serve-static-core";

import { ParsedQs } from "qs";

interface RequestWithUser
  extends Request<ParamsDictionary, any, any, ParsedQs> {
  user?: any; // or the type of your user if you have one
}

export const signup = async (req: Request, res: Response) => {
  try {
    const newUser = new User({
      fullName: req.body.fullName,
      email: req.body.email,
      hash_password: bcrypt.hashSync(req.body.password, 10),
      username: req.body.username,
      species: req.body.species,
      birthdate: req.body.birthdate,
      gender: req.body.gender,
      created: new Date(),
    });

    const savedUser = await newUser.save();

    // Create a profile for the newly registered user
    const newProfile = new Profile({
      userId: savedUser._id,
      // Add other profile fields as needed
    });

    const savedProfile = await newProfile.save();

    savedUser.hash_password = "";
    return res.json({ user: savedUser, profile: savedProfile });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Registration failed" });
  }
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

export const updateProfile = async (req: RequestWithUser, res: Response) => {
  try {
    const userId = req.user._id;

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user information
    await user.updateOne({
      fullName: req.body.fullName,
      species: req.body.species,
      address: req.body.address,
      gender: req.body.gender,
      // Add other fields as needed
    });

    // Return the updated user
    const updatedUser = await User.findById(userId);
    return res.json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getProfile = async (req: RequestWithUser, res: Response) => {
  try {
    const userId = req.user._id;

    // Check if a profile already exists for the user
    const existingProfile = await Profile.findOne({ userId });

    if (!existingProfile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    return res.json(existingProfile);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
