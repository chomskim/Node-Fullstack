require('dotenv').config();
const { MongoClient } = require('mongodb');

let db;

async function connectToDb() {
  const url = process.env.DB_URL || 'mongodb://localhost/issuetracker';
  const client = new MongoClient(url, { useNewUrlParser: true });
  await client.connect();
  console.log('Connected to MongoDB at', url);
  db = client.db();
}

async function getNextSequence(name) {
  /*
  const result = await db.collection('counters').findOneAndUpdate(
    { _id: name },
    { $inc: { current: 1 } },
    { returnOriginal: false },
  );
  console.log('result=',result);
  return result.value.current;
  */
  const result = await db.collection(name).count() + 1;
  return result;
}

function getDb() {
  return db;
}

module.exports = { connectToDb, getNextSequence, getDb };
