const dbconnection = require('./db');

async function main(){
    try {
        const collection = await dbconnection();

        const deleteResult = await collection.deleteOne(
            {name: "Ankush Lavania"}
        )
        console.log('Delete Result:', deleteResult);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
