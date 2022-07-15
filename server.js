const express = require('express');
const path = require('path');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "views"));

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
  res.render('index.hbs', {
      title:"My Friends",
      caption:"Let\'s go skiing!!!",
  })
})


app.use("/site", express.static(path.join(__dirname, "public")));
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);


app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});