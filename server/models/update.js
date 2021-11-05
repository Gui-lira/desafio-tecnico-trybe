const connection = require('./connection');

const update = async (collectionName, params, elements) => {
    const db = await connection();
    return db.collection(collectionName).updateOne(params, { $set: elements });
};

module.exports = update;