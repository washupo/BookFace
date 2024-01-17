import mongoose from "mongoose";

const Schema = mongoose.Schema;

interface Profile {
  userId: mongoose.Schema.Types.ObjectId;
  bio?: string;
  avatar?: string;
}

const ProfileSchema = new Schema<Profile>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  bio: String,
  avatar: String,
  // Add any other fields you want for the user profile
});

export default mongoose.model<Profile>("Profile", ProfileSchema);
