const inserUser = require("../services/insertUser");

const putUserController = async (req, res) => {
    const { name, list } = req.body;
    await inserUser({ name, list });
    return res.status(200).end();
};
module.exports = putUserController;