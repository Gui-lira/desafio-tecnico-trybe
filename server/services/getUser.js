const get = require('../models/get');

const getUser = async (name) => {
    const [user] = await get('Users', { name });
    return user;
};

module.exports = getUser;