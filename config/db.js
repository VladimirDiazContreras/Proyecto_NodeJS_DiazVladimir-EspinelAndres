require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;

let db;

async function conectarDB() {
  if (db) return db;
  const client = new MongoClient(uri);
  await client.connect();
  db = client.db(dbName);
  console.log(" Conectado a MongoDB");
  return db;
}

module.exports = conectarDB;
