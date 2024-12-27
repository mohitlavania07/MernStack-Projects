const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017/'
const Client = new MongoClient(url)
const dbName = 'MongoTut';

async function main(){
await Client.connect();
console.log("connected to database");
const db = Client.db(dbName)  
const find = await db.collection('backend').find().toArray()
console.log(find)
}
main();