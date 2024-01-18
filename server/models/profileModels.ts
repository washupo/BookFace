import mongoose from "mongoose";

const Schema = mongoose.Schema;

interface Profile {
  userId: mongoose.Schema.Types.ObjectId;
  bio?: string;
  avatar?: Object;
  email?: string;
  username?: string;
  genre?: string;
  birthdate?: string;
}

const ProfileSchema = new Schema<Profile>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  bio: String,
  avatar: Object,
  email: {
    type: String,
    trim: true,
    unique: true,
    required: [true, "email is required"],
    lowercase: true,
  },
  username: {
    type: String,
    required: [true, "username is required"],
    unique: true,
  },
  genre: {
    type: String,
    select: false,
  },
  birthdate: {
    type: Date,
    select: false,
  },
  // Add any other fields you want for the user profile
});

export const Profile = mongoose.model<Profile>("Profile", ProfileSchema);
