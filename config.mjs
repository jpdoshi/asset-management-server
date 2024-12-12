import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 8000;
export const MONGO_URI = `mongodb+srv://jpdoshi2811:${encodeURIComponent(
  process.env.MONGO_PWD
)}@cluster0.pxzycum.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
