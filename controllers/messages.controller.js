const path = require('path');

function getMessages(req,res) {
    res.send('<ul><li>Hi Sir Isaac Newton</li></ul>');
};

function getMessageFile(req, res) {
   res.sendFile(path.join(__dirname, '..' , 'public', 'images', 'skimountain.jpg'));
}

module.exports = {
    getMessages, 
    getMessageFile
}