import UserModel from "../models/UserModel.mjs";

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
