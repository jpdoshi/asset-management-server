import express from "express";

import {
  createUser,
  deleteUserById,
  getAllUsers,
  getUserById,
  getUserByRole,
  loginUser,
  removeAssetRequest,
  removeUserFromTeam,
  requestAsset,
  updateUserById,
} from "../controllers/UserController.mjs";

const UserRoutes = express.Router();

UserRoutes.get("/", getAllUsers);
UserRoutes.get("/:id", getUserById);
UserRoutes.get("/role/:slug", getUserByRole);
UserRoutes.post("/", createUser);
UserRoutes.post("/request-asset/:id", requestAsset);
UserRoutes.post("/login", loginUser);
UserRoutes.delete("/:id", deleteUserById);
UserRoutes.delete("/remove-team/:id", removeUserFromTeam);
UserRoutes.put("/:id", updateUserById);
UserRoutes.put("/remove-request/:id", removeAssetRequest);

export default UserRoutes;
