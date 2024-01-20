// controllers/profileController.ts
import { Request, Response } from "express";
import { RequestWithUser } from "../server";
import { User } from "../models/userModels";
import { Profile } from "../models/profileModels";

export const createProfile = async (req: RequestWithUser, res: Response) => {
  try {
    const userId = req.user._id;

    // Check if a profile already exists for the user
    const existingProfile = await Profile.findOne({ userId });

    if (existingProfile) {
      return res
        .status(400)
        .json({ message: "Profile already exists for the user" });
    }

    // Retrieve user details
    const userDetails = await User.findById(userId);

    if (!userDetails) {
      return res.status(404).json({ message: "User not found" });
    }
    
    console.log('Request Body:', req.body);

    // Create a new profile
    const newProfile = new Profile({
      userId,
      bio: req.body.bio,
      avatar: req.body.avatar,
      username: userDetails.fullName,
      email: userDetails.email,
      // Add other profile fields as needed
    });

    // Save the profile to the database
    const savedProfile = await newProfile.save();

    return res.status(201).json(savedProfile);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
