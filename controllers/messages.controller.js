const path = require('path');

function getMessages(req,res) {
    res.render('messages', {
        friend: "Isaac Newton",
        message: "Astronomy is an awesome field!!!"
    });
};

function getMessageFile(req, res) {
   res.sendFile(path.join(__dirname, '..' , 'public', 'images', 'skimountain.jpg'));
}

module.exports = {
    getMessages, 
    getMessageFile
}