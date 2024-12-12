import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { PORT, MONGO_URI } from "./config.mjs";

import UserRoutes from "./routes/UserRoutes.mjs";
import AssetRoutes from "./routes/AssetRoutes.mjs";

const app = express();

try {
  mongoose.connect(MONGO_URI, {
    dbName: "ams_backend",
  });
  console.log("Connected to Database!");
} catch (err) {
  console.error(err);
}

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use("/user", UserRoutes);
app.use("/asset", AssetRoutes);

app.listen(PORT, (err) => {
  if (err) console.error(err);
  console.log(`App is listening on PORT:${PORT}`);
});
