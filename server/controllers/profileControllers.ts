// controllers/profileControllers.ts
import { Request, Response } from "express";
import Profile from "../models/profileModels";
import User from "../models/userModels";
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
      // Retrieve user details from the User model
      const userDetails = await User.findById(user._id);

      if (userDetails) {
        // Combine user data and profile data
        const completeProfile = {
          user: userDetails,
          profile: userProfile,
        };

        return res.json(completeProfile);
      } else {
        return res.status(404).json({ message: "User not found" });
      }
    } else {
      return res.status(404).json({ message: "Profile not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
