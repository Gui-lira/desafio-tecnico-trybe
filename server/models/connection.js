const { MongoClient } = require('mongodb');

const URL = "mongodb://127.0.0.1:27017/";

let db = null;

const connection = async () => {
    if (db) return Promise.resolve(db);
    const conn = await MongoClient.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true,});
    db = await conn.db('Todos');
    return db;
};

module.exports = connection;