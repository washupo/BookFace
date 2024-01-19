import mongoose, { Schema, Document } from "mongoose";

interface Post extends Document {
  user: string;
  caption: string;
  image: string; // chemin de l'image ou URL
  createdAt: Date;
}

const PostSchema: Schema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  caption: { type: String, required: true },
  image: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const PostModel = mongoose.model<Post>("Post", PostSchema);

export default PostModel;
