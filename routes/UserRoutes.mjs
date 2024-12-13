import express from "express";

import {
  createUser,
  deleteUserById,
  getAllUsers,
  getUserById,
  getUserByRole,
  loginUser,
  removeUserFromTeam,
  updateUserById,
} from "../controllers/UserController.mjs";

const UserRoutes = express.Router();

UserRoutes.get("/", getAllUsers);
UserRoutes.get("/:id", getUserById);
UserRoutes.get("/role/:slug", getUserByRole);
UserRoutes.post("/", createUser);
UserRoutes.post("/login", loginUser);
UserRoutes.delete("/:id", deleteUserById);
UserRoutes.delete("/remove-team/:id", removeUserFromTeam);
UserRoutes.put("/:id", updateUserById);

export default UserRoutes;
