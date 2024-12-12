import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
  },
  role: {
    type: String,
    enum: ["User", "Admin", "Manager"],
    default: "User",
  },
  assets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Asset",
    },
  ],
});

const UserModel = mongoose.model("User", userSchema, "users");
export default UserModel;
