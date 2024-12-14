import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
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
  designation: String,
  requests: [
    {
      type: String,
      enum: ["Monitor", "Mouse", "Keyboard", "Laptop"],
    },
  ],
});

const UserModel = mongoose.model("User", userSchema, "users");
export default UserModel;
