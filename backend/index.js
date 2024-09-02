import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./Routes/users.js";
import adopted_petRoutes from "./Routes/adopted_pets.js";
import itemRoutes from "./Routes/items.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use(
  cors({
    origin: process.env.URL,
  })
);

app.listen(PORT, () => {
  console.log("Working on", PORT);
});

app.use("/api/user", userRoutes);
app.use("/api/adopted_pet", adopted_petRoutes);
app.use("/api/item", itemRoutes);
