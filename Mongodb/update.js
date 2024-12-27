const dbconnection = require('./db');

async function main(){
    try {
        const collection = await dbconnection();

        const updateResult = await collection.updateMany(
            {name: "Ankush Lavania"},{$set:{age:22}}
        )
        console.log('Update Result:', updateResult);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
