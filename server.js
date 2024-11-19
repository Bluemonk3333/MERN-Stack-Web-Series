const express = require("express");
const app = express();
const router = require("./routers/router");

const port = 9000;

app.use(express.json());
app.use(router);

// create a listener for our express server
app.listen(port, (e) => {
  if (e) {
    console.log(`Server got an error! ${e}`);
  } else {
    console.log(`Server is listening on: 127.0.0.1:${port}`);
  }
});
