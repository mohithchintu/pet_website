import express from "express";
import {
  createAdoption_pets,
  deleteAdoption_pets,
  getAdoption_pet,
  getAdoption_pets,
  updateAdoption_pets,
} from "../DataBase/manageDB.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await getAdoption_pets();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const pet = await getAdoption_pet(id);
    if (!pet) {
      return res.status(404).json({ error: "Pet not found" });
    }
    res.json(pet[0]);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, catagory, age, description } = req.body;
    const newPet = await createAdoption_pets({
      name,
      catagory,
      age,
      description,
    });
    res.status(201).json({ newPet });
  } catch (error) {
    res.status(500).json({ error: "Failed to create pet" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { name, catagory, age, description } = req.body;
    const updatedPet = await updateAdoption_pets(id, {
      name,
      catagory,
      age,
      description,
    });
    res.json(updatedPet);
  } catch (error) {
    res.status(500).json({ error: "Failed to update pet" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletePet = await deleteAdoption_pets(id);
    res.json(deletePet);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete pet" });
  }
});

export default router;
