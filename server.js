const express = require('express');

const messagesController = require('./controllers/messages.controller');
const friendsController = require('./controllers/friends.controller');

const app = express();
const PORT = 3000;


//custom middleware for logging
app.use((req, res, next) => {
   const start = Date.now();
   console.log(`Request Attributes : ${req.method} ${req.url}`);
   next();
   //actions go here....
   const delta = Date.now() - start;
   console.log(`Time Taken: ${delta}ms`);
})

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
})

app.get("/friends", friendsController.getFriends);

app.post('/friends', friendsController.addFriend);

app.get("/friends/:friendId", friendsController.getFriend);

app.get("/messages", messagesController.getMessages);

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});