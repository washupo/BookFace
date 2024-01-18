import * as mongoose from "mongoose";
import * as bcrypt from "bcrypt";
const Schema = mongoose.Schema;

/**
 * User Schema
 */
interface User {
  username: string;
  fullName: string;
  email: string;
  hash_password: string;
  created: Date;
  species: string;
  birthdate: Date;
  gender: string;
}

const UserSchema = new Schema<User>({
  fullName: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true,
  },
  hash_password: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  species: {
    type: String,
    trim: true,
  },
  birthdate: {
    type: Date,
  },
  gender: {
    type: String,
    enum: ["M", "F", "X"],
  },
});

UserSchema.methods.comparePassword = function (password: string): boolean {
  return bcrypt.compareSync(password, this.hash_password);
};

UserSchema.statics.findById = function (userId: mongoose.Types.ObjectId) {
  return this.findOne({ _id: userId });
};

// Add a method for updating user information
UserSchema.methods.updateProfile = function (updateData: Partial<User>) {
  Object.assign(this, updateData);
  return this.save();
};
export const User = mongoose.model<User>("User", UserSchema);
