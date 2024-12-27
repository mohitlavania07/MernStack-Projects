const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url);
const dbName = 'MongoTut';

async function dbconnection() {
    await client.connect();
    console.log("connected to database");
    const db = client.db(dbName);
    return db.collection('backend');
}

module.exports = dbconnection;
