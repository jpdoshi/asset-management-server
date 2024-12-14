import express from "express";

import {
  createTeam,
  deleteTeamById,
  getAllTeams,
  getTeamById,
  getTeamByManager,
  requestAsset,
  updateTeamById,
} from "../controllers/TeamController.mjs";

const TeamRoutes = express.Router();

TeamRoutes.get("/", getAllTeams);
TeamRoutes.get("/:id", getTeamById);
TeamRoutes.get("/manager/:id", getTeamByManager);
TeamRoutes.post("/", createTeam);
TeamRoutes.post("/request-asset/:id", requestAsset);
TeamRoutes.delete("/:id", deleteTeamById);
TeamRoutes.put("/:id", updateTeamById);

export default TeamRoutes;
