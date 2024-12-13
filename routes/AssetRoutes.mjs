import express from "express";
import {
  availableAssetById,
  createAsset,
  deleteAssetById,
  fixAssetById,
  getAllAssets,
  getAssetByCategory,
  getAssetById,
  getAssetByTeam,
  getAssetByUser,
  getAssetHistoryById,
  getRecentAssetHistory,
  repairAssetById,
  scrapAssetById,
  updateAssetById,
} from "../controllers/AssetController.mjs";

const AssetRoutes = express.Router();

AssetRoutes.get("/", getAllAssets);
AssetRoutes.get("/id/:id", getAssetById);
AssetRoutes.get("/user/:id", getAssetByUser);
AssetRoutes.get("/team/:id", getAssetByTeam);
AssetRoutes.get("/category/:category", getAssetByCategory);
AssetRoutes.get("/recents", getRecentAssetHistory);
AssetRoutes.get("/history/:id", getAssetHistoryById);
AssetRoutes.put("/scrap/:id", scrapAssetById);
AssetRoutes.put("/fix/:id", fixAssetById);
AssetRoutes.put("/repair/:id", repairAssetById);
AssetRoutes.put("/available/:id", availableAssetById);
AssetRoutes.post("/", createAsset);
AssetRoutes.delete("/:id", deleteAssetById);
AssetRoutes.put("/:id", updateAssetById);

export default AssetRoutes;
