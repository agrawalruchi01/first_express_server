
const express = require('express');
const messagesController = require('../controllers/messages.controller');

const messagesRouter = express.Router();

messagesRouter.use((req,res,next) => {
    console.log("Message Router");
    next();
})

messagesRouter.get('/', messagesController.getMessages);
messagesRouter.get("/file", messagesController.getMessageFile);

module.exports = messagesRouter;