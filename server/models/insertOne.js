const connection = require('./connection');

const insert = async (collectionName, element) => {
    const db = await connection();
    return await db.collection(collectionName).insertOne(element);
};

module.exports = insert;