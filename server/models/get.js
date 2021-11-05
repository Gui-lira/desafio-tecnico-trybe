const connection = require('./connection');

const get = async (collectionName, filters) => {
    const db = await connection();
    const values = await db.collection(collectionName).find(filters).toArray();
    return values;
};

module.exports = get;