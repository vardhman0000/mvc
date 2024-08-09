const userModel = require('../Models/userModel');
const systemlogger = require('../Middlewares/logger');

const getallUsers = async (req, res, systemlogger) => {
    // business logic

    res.send(userList);
}


async function getallUsers(){
    return userModel;
}