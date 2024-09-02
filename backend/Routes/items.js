import express from "express";
import {
  createItem,
  deleteItem,
  getItem,
  getItemByCatagory,
  getItems,
  updateItem,
} from "../DataBase/manageDB.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await getItems();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const item = await getItem(id);
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.json(item[0]);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.get("/category/:category", async (req, res) => {
  try {
    const category = req.params.category;
    const items = await getItemByCatagory(category);
    if (!items.length) {
      return res.status(404).json({ error: "No items found in this category" });
    }
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { item_name, description, price, quantity, catagory } = req.body;
    const newItem = await createItem({
      item_name,
      description,
      price,
      quantity,
      catagory,
    });
    console.log(newItem);
    res.status(201).json({ newItem });
  } catch (error) {
    res.status(500).json({ error: "Failed to create item" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { item_name, description, price, quantity, catagory } = req.body;
    const updatedItem = await updateItem(id, {
      item_name,
      description,
      price,
      quantity,
      catagory,
    });
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: "Failed to update item" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteItem = await deleteItem(id);
    res.json(deleteItem);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete item" });
  }
});

export default router;
