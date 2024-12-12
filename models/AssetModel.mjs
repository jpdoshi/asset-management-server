import mongoose from "mongoose";

const assetSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  category: {
    type: String,
    enum: ["Mouse", "Keyboard", "Monitor", "Laptop"],
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
  },
  status: {
    type: String,
    enum: ["Available", "In Use", "In Repair", "Scrap"],
    default: "Available",
  },
  product: String,
  configuration: {
    type: mongoose.Schema.Types.Mixed,
  },
  maintenanceLog: [
    {
      status: String,
      issue: String,
      date: Date,
    },
  ],
});

const AssetModel = mongoose.model("Asset", assetSchema, "assets");
export default AssetModel;
