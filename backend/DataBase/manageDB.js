import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "pet_db",
  })
  .promise();

//Users

export async function getUsers() {
  const [usersData] = await pool.query(`SELECT * FROM users WHERE flag=0`);
  return usersData;
}

export async function getUser(id) {
  const [userdata] = await pool.query(
    `SELECT * FROM users 
          WHERE uid = ? AND flag = 0`,
    [id]
  );
  return userdata;
}

export async function createUser(udata) {
  const { name, email, mobileNumber, password } = udata;
  const result = await pool.query(
    `INSERT INTO users (name, email, mobileNumber, password)
         VALUES (?, ?, ?, ?)`,
    [name, email, mobileNumber, password]
  );
  return result;
}

export async function updateUser(uid, newData) {
  const { name, email, mobileNumber, password } = newData;
  const result = await pool.query(
    `UPDATE users 
         SET name = ?, email = ?, mobileNumber = ?, password = ? 
         WHERE uid = ? AND flag = 0`,
    [name, email, mobileNumber, password, uid]
  );
  return result;
}

export async function deleteUser(id) {
  const result = await pool.query(
    `UPDATE users 
         SET flag = 1 WHERE uid = ? `,
    [id]
  );
  return result;
}

//Pets

export async function getAdoption_pets() {
  const [adoption_petsData] = await pool.query(
    `SELECT * FROM adoption_pets WHERE flag=0`
  );
  return adoption_petsData;
}

export async function getAdoption_pet(id) {
  const [adoption_petData] = await pool.query(
    `SELECT * FROM adoption_pets 
            WHERE apid = ? AND flag = 0`,
    [id]
  );
  return adoption_petData;
}

export async function createAdoption_pets(udata) {
  const { name, catagory, age, description } = udata;
  const result = await pool.query(
    `INSERT INTO adoption_pets (name, catagory, age, description)
           VALUES (?, ?, ?, ?)`,
    [name, catagory, age, description]
  );
  return result;
}

export async function updateAdoption_pets(id, newData) {
  const { name, catagory, age, description } = newData;
  const result = await pool.query(
    `UPDATE adoption_pets 
           SET name = ?, catagory = ?, age = ?, description = ? 
           WHERE apid = ? AND flag = 0`,
    [name, catagory, age, description, id]
  );
  return result;
}

export async function deleteAdoption_pets(id) {
  const result = await pool.query(
    `UPDATE adoption_pets 
           SET flag = 1 WHERE apid = ? `,
    [id]
  );
  return result;
}

//Items

export async function getItems() {
  const [itemsData] = await pool.query(`SELECT * FROM items WHERE flag=0`);
  return itemsData;
}

export async function getItem(id) {
  const [itemsdata] = await pool.query(
    `SELECT * FROM items 
            WHERE iid = ? AND flag = 0`,
    [id]
  );
  return itemsdata;
}

export async function getItemByCatagory(catagory) {
  const [result] = await pool.query(
    `SELECT * FROM items WHERE catagory = ? AND flag = 0`,
    [catagory]
  );
  return result;
}

export async function createItem(idata) {
  const { item_name, description, price, quantity, catagory } = idata;
  const result = await pool.query(
    `INSERT INTO items (item_name, description, price, quantity, catagory)
           VALUES (?, ?, ?, ?, ?)`,
    [item_name, description, price, quantity, catagory]
  );
  return result;
}

export async function updateItem(id, newData) {
  const { item_name, description, price, quantity, catagory } = newData;
  const result = await pool.query(
    `UPDATE items 
           SET item_name = ?, description = ?, price = ?, quantity = ?, catagory = ? 
           WHERE iid = ? AND flag = 0`,
    [item_name, description, price, quantity, catagory, id]
  );
  return result;
}

export async function deleteItem(id) {
  const result = await pool.query(
    `UPDATE items 
           SET flag = 1 WHERE iid = ? `,
    [id]
  );
  return result;
}
