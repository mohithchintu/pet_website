import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const DBconnection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
});

const checkDBQuery =
  "SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = 'PET_DB' ";

DBconnection.query(checkDBQuery, (err, results) => {
  if (err) throw err;

  if (results.length === 0) {
    const createDBQuery = "CREATE DATABASE PET_DB";
    DBconnection.query(createDBQuery, (err, result) => {
      if (err) throw err;
      console.log("Database created successfully");
      createTable();
    });
  } else {
    console.log("Database already exists");
  }
});
