const updateUser = require("../services/updateUser");

const updateUserController = (req, res, next) => {
    const { name, list } = req.body;
    await updateUser(name, { list });
    return res.status(200).end();
};

module.exports = updateUserController;