// controllers/profileControllers.ts
import { Request, Response } from "express";
import Profile from "../models/profileModels";
import { RequestWithUser } from "../server"; // Update the path accordingly

export const getProfile = async (req: RequestWithUser, res: Response) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).json({ message: "Invalid token" });
    }

    // Retrieve user profile
    const userProfile = await Profile.findOne({ userId: user._id });

    if (userProfile) {
      // Combine user data and profile data
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
