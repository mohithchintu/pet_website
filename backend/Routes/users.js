import express from "express";
import {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} from "../DataBase/manageDB.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await getUsers();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await getUser(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user[0]);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, email, mobileNumber, password } = req.body;
    const newUser = await createUser({
      name,
      email,
      mobileNumber,
      password,
    });
    res.status(201).json({ newUser });
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email, mobileNumber, password } = req.body;
    const updatedUser = await updateUser(id, {
      name,
      email,
      mobileNumber,
      password,
    });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to update user" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteUser = await deleteUser(id);
    res.json(deleteUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user" });
  }
});

export default router;
