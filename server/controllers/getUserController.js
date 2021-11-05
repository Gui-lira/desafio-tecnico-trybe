const getUser = require("../services/getUser");

const getUserController = async (req, res) => {
    const { name } = req.body;
    const user = await getUser(name);
    return res.status(200).json(user);
};

module.exports = getUserController;