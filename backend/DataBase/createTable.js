import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const conn = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE || "pet_db",
});

const q1 = `
    CREATE TABLE IF NOT EXISTS users (
    uid INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mobileNumber BIGINT UNSIGNED NOT NULL,
    password VARCHAR(255) NOT NULL,
    flag INT DEFAULT 0,
    creationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;

const q2 = `
    CREATE TABLE IF NOT EXISTS adoption_pets (
    apid INT AUTO_INCREMENT PRIMARY KEY,
    catagory VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    age INT DEFAULT 0,
    description VARCHAR(255) NOT NULL,
    flag INT DEFAULT 0,
    creationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;

const q3 = `
    CREATE TABLE IF NOT EXISTS items (
    iid INT AUTO_INCREMENT PRIMARY KEY,
    item_name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    quantity VARCHAR(225) NOT NULL,
    catagory VARCHAR(225) NOT NULL,
    flag INT DEFAULT 0,
    creationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;

const q4 = `
    CREATE TABLE IF NOT EXISTS invoice (
    iid INT AUTO_INCREMENT PRIMARY KEY,
    u_id INT NULL,
    item_id INT NULL,
    amount DECIMAL(10,2) NOT NULL,
    tax DECIMAL(10,2) NOT NULL,
    mode VARCHAR(255) NOT NULL,
    FOREIGN KEY (u_id) REFERENCES users(uid) ON DELETE SET NULL,
    FOREIGN KEY (item_id) REFERENCES items(iid) ON DELETE SET NULL,
    flag INT DEFAULT 0,
    creationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;

const q5 = `
    CREATE TABLE IF NOT EXISTS transaction (
    tid INT AUTO_INCREMENT PRIMARY KEY,
    u_id INT NULL,
    i_id INT NULL,
    mode VARCHAR(255) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (u_id) REFERENCES users(uid) ON DELETE SET NULL,
    FOREIGN KEY (i_id) REFERENCES invoice(iid) ON DELETE SET NULL,
    flag INT DEFAULT 0,
    creationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;

const queries = [q1, q2, q3, q4, q5];

queries.forEach((query) => {
  conn.query(query, (err, results) => {
    if (err) {
      console.error("Error creating table:", err);
      return;
    }
    console.log("Table created successfully.");
  });
});

conn.end((err) => {
  if (err) throw err;
  console.log("Connection closed");
});
