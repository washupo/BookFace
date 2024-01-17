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
  address: string;
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
  address: {
    street: String,
    city: String,
    state: String,
    zipcode: String,
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
export default mongoose.model<User>("User", UserSchema);
