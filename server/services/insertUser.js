const insert = require("../models/insertOne");

const inserUser = async (user) => {
    const inserted = await insert('Users', user);
    return inserted;
}