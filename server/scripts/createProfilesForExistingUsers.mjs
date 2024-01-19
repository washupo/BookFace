import mongoose from "mongoose";
import { User } from "../models/userModels";
import { Profile } from "../models/profileModels";

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://washupo:NW2GeoqekvqWNE3Q@bookface.diverrj.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const createProfilesForExistingUsers = async () => {
  try {
    const existingUsers = await User.find();

    for (const user of existingUsers) {
      // Check if a profile already exists for the user
      const existingProfile = await Profile.findOne({ userId: user._id });

      if (!existingProfile) {
        // If no profile exists, create one
        const newProfile = new Profile({
          userId: user._id,
          // Add other profile fields as needed
        });

        await newProfile.save();
        console.log(`Profile created for user: ${user._id}`);
      }
    }

    console.log("Profile creation for existing users completed");
  } catch (err) {
    console.error(err);
  } finally {
    // Disconnect from MongoDB
    mongoose.disconnect();
  }
};

createProfilesForExistingUsers();
