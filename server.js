const express = require('express');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();
const PORT = 3000;

//custom middleware for logging
app.use((req, res, next) => {
   const start = Date.now();
   console.log(`Request Attributes : ${req.method} ${req.baseUrl}${req.url}`);
   next();
   //actions go here....
   const delta = Date.now() - start;
   console.log(`Time Taken: ${delta}ms`);
})

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
})

app.use("/friends", friendsRouter);
app.get("/messages", messagesRouter);

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});