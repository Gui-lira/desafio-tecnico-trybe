const update = require("../models/update");

const updateUser = async (name, elements) => update('Users', { name }, elements);

module.exports = updateUser;