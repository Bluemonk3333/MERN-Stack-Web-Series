const express = require("express");
const app = express();
const port = 9000;

// create our home page
app.get("/", (req, resp) => {
  resp.status(200).send("Home Page!");
});

// create a listener for our express server
app.listen(port, (e) => {
  if (e) {
    console.log(`Server got an error! ${e}`);
  } else {
    console.log(`Server is listening on: 127.0.0.1:${port}`);
  }
});
