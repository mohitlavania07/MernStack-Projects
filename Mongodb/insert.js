const dbconnection = require("./db");

async function main() {
  try {
    // Await the dbconnection to get the collection
    const collection = await dbconnection();

    const data = [{ name: "Mohit Lavania" }, { name: "Ankush Lavania" }];
    console.log(data);

    // Fetch all documents in the collection
    const result = await collection.insertMany(data);
    console.log(result);
  } catch (error) {
    console.error("Error retrieving data:", error);
  }
}

main();
