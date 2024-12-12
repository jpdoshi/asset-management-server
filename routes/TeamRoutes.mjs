import express from "express";

import {
  createTeam,
  deleteTeamById,
  getAllTeams,
  getTeamById,
  updateTeamById,
} from "../controllers/TeamController.mjs";

const TeamRoutes = express.Router();

TeamRoutes.get("/", getAllTeams);
TeamRoutes.get("/:id", getTeamById);
TeamRoutes.post("/", createTeam);
TeamRoutes.delete("/:id", deleteTeamById);
TeamRoutes.put("/:id", updateTeamById);

export default TeamRoutes;
