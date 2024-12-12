import express from "express";
import {
  createAsset,
  deleteAssetById,
  fixAssetById,
  getAllAssets,
  getAssetByCategory,
  getAssetById,
  getAssetHistoryById,
  getRecentAssetHistory,
  scrapAssetById,
  updateAssetById,
} from "../controllers/AssetController.mjs";

const AssetRoutes = express.Router();

AssetRoutes.get("/", getAllAssets);
AssetRoutes.get("/id/:id", getAssetById);
AssetRoutes.get("/category", getAssetByCategory);
AssetRoutes.get("/recents", getRecentAssetHistory);
AssetRoutes.get("/history/:id", getAssetHistoryById);
AssetRoutes.put("/scrap/:id", scrapAssetById);
AssetRoutes.put("/fix/:id", fixAssetById);
AssetRoutes.post("/", createAsset);
AssetRoutes.delete("/:id", deleteAssetById);
AssetRoutes.put("/:id", updateAssetById);

export default AssetRoutes;
