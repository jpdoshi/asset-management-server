import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  requests: [
    {
      asset: {
        type: String,
        enum: ["Monitor", "Mouse", "Keyboard", "Laptop"],
      },
      requestedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
});

const TeamModel = mongoose.model("Team", teamSchema, "teams");
export default TeamModel;
