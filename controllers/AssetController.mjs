import AssetModel from "../models/AssetModel.mjs";
import { capitalize } from "../utils.mjs";

export const getAllAssets = async (req, res) => {
  try {
    const assets = await AssetModel.find();

    if (assets) {
      res.status(200).json({ data: assets });
    } else {
      res.status(404).json({ msg: "No Assets Found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getAssetById = async (req, res) => {
  try {
    const id = req.params.id;
    const asset = await AssetModel.findById(id);

    if (asset) {
      res.status(200).json({ data: asset });
    } else {
      res.status(404).json({ msg: "No Assets Found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getAssetHistoryById = async (req, res) => {
  try {
    const id = req.params.id;
    const asset = await AssetModel.findById(id, { maintenanceLog: 1 });

    if (asset) {
      res.status(200).json({ data: asset });
    } else {
      res.status(404).json({ msg: "No Assets Found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getRecentAssetHistory = async (req, res) => {
  try {
    const assets = await AssetModel.find({
      "maintenanceLog.date": { $exists: true },
    })
      .sort("-maintenanceLog.date")
      .limit(10);

    if (assets) {
      res.status(200).json({ data: assets });
    } else {
      res.status(404).json({ msg: "No Assets Found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

export const deleteAssetById = async (req, res) => {
  try {
    const id = req.params.id;
    const asset = await AssetModel.findByIdAndDelete(id);

    if (asset) {
      res.status(200).json({ data: asset });
    } else {
      res.status(404).json({ msg: "No Assets Found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getAssetByCategory = async (req, res) => {
  try {
    const category = capitalize(req.params.category);
    const asset = await AssetModel.find({ category }).populate("user");

    if (asset) {
      res.status(200).json({ data: asset });
    } else {
      res.status(404).json({ msg: "No Assets Found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

export const updateAssetById = async (req, res) => {
  try {
    const id = req.params.id;
    const asset = await AssetModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (asset) {
      res.status(200).json({ data: asset });
    } else {
      res.status(404).json({ msg: "No Assets Found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

export const scrapAssetById = async (req, res) => {
  try {
    const id = req.params.id;
    const asset = await AssetModel.findByIdAndUpdate(
      id,
      { status: "Scrap" },
      {
        new: true,
      }
    );

    if (asset) {
      res.status(200).json({ data: asset });
    } else {
      res.status(404).json({ msg: "No Assets Found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

export const fixAssetById = async (req, res) => {
  try {
    const id = req.params.id;
    const asset = await AssetModel.findByIdAndUpdate(
      id,
      { status: "Fixed" },
      {
        new: true,
      }
    );

    if (asset) {
      res.status(200).json({ data: asset });
    } else {
      res.status(404).json({ msg: "No Assets Found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

export const repairAssetById = async (req, res) => {
  try {
    const id = req.params.id;
    const asset = await AssetModel.findByIdAndUpdate(
      id,
      { status: "In Repair" },
      {
        new: true,
      }
    );

    if (asset) {
      res.status(200).json({ data: asset });
    } else {
      res.status(404).json({ msg: "No Assets Found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

export const availableAssetById = async (req, res) => {
  try {
    const id = req.params.id;
    const asset = await AssetModel.findByIdAndUpdate(
      id,
      { status: "Available" },
      {
        new: true,
      }
    );

    if (asset) {
      res.status(200).json({ data: asset });
    } else {
      res.status(404).json({ msg: "No Assets Found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

export const createAsset = async (req, res) => {
  try {
    const asset = await AssetModel.create(req.body);

    if (asset) {
      res.status(201).json({ data: asset });
    } else {
      res.status(400).json({ msg: "Asset not created" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
