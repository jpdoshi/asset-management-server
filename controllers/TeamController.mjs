import TeamModel from "../models/TeamModel.mjs";

export const getAllTeams = async (req, res) => {
  try {
    const teams = await TeamModel.find().populate("team");

    if (teams) {
      res.status(200).json({ data: teams });
    } else {
      res.status(404).json({ msg: "No Teams Found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getTeamById = async (req, res) => {
  try {
    const id = req.params.id;
    const team = await TeamModel.findById(id).populate("team");

    if (team) {
      res.status(200).json({ data: team });
    } else {
      res.status(404).json({ msg: "No Team Found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

export const deleteTeamById = async (req, res) => {
  try {
    const id = req.params.id;
    const team = await TeamModel.findByIdAndDelete(id);

    if (team) {
      res.status(200).json({ data: team });
    } else {
      res.status(404).json({ msg: "No Team Found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

export const updateTeamById = async (req, res) => {
  try {
    const id = req.params.id;
    const team = await TeamModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (team) {
      res.status(200).json({ data: team });
    } else {
      res.status(404).json({ msg: "No Team Found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

export const createTeam = async (req, res) => {
  try {
    const team = await TeamModel.create(req.body);

    if (team) {
      res.status(201).json({ data: team });
    } else {
      res.status(400).json({ msg: "Team not created" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
