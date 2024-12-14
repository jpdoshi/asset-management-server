import UserModel from "../models/UserModel.mjs";
import { capitalize, removeFirstStringElement } from "../utils.mjs";

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find().populate("team");

    if (users) {
      res.status(200).json({ data: users });
    } else {
      res.status(404).json({ msg: "No Users Found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

export const loginUser = async (req, res) => {
  try {
    const user = await UserModel.findOne({
      username: req.body.username,
      password: req.body.password,
    });

    if (user) {
      res.status(200).json({ data: user });
    } else {
      res.status(404).json({ msg: "No Users Found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id).populate("team");

    if (user) {
      res.status(200).json({ data: user });
    } else {
      res.status(404).json({ msg: "No User Found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getUserByRole = async (req, res) => {
  try {
    const role = capitalize(req.params.slug);
    const user = await UserModel.find({ role });

    if (user) {
      res.status(200).json({ data: user });
    } else {
      res.status(404).json({ msg: "No User Found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndDelete(id);

    if (user) {
      res.status(200).json({ data: user });
    } else {
      res.status(404).json({ msg: "No User Found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

export const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (user) {
      res.status(200).json({ data: user });
    } else {
      res.status(404).json({ msg: "No User Found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

export const createUser = async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    if (user) {
      res.status(201).json({ data: user });
    } else {
      res.status(400).json({ msg: "User not created" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

export const requestAsset = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    let requests = user.requests;

    requests.push(req.body.asset);

    if (user) {
      await UserModel.findByIdAndUpdate(user._id, {
        requests,
      });
      res.status(200).json({ data: user });
    } else {
      res.status(400).json({ msg: "User not Found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

export const removeAssetRequest = async (req, res) => {
  try {
    const userId = req.params.id;
    const asset = req.body.asset;

    let user = await UserModel.findById(userId);

    if (user) {
      const requests = removeFirstStringElement(user.requests, asset);
      user = await UserModel.findByIdAndUpdate(
        user._id,
        { requests },
        { new: true }
      );

      res.status(200).json({ data: user });
    } else {
      res.status(400).json({ msg: "User not Found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

export const removeUserFromTeam = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);

    if (user) {
      const result = await UserModel.findByIdAndUpdate(
        user._id,
        { team: null },
        { new: 1 }
      );
      res.status(200).json({ data: result });
    } else {
      res.status(400).json({ msg: "User not Found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
