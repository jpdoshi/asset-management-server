import express from "express";

import {
  createUser,
  deleteUserById,
  getAllUsers,
  getUserById,
  getUserByRole,
  updateUserById,
} from "../controllers/UserController.mjs";

const UserRoutes = express.Router();

UserRoutes.get("/", getAllUsers);
UserRoutes.get("/:id", getUserById);
UserRoutes.get("/role/:slug", getUserByRole);
UserRoutes.post("/", createUser);
UserRoutes.delete("/:id", deleteUserById);
UserRoutes.put("/:id", updateUserById);

export default UserRoutes;
