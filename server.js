const express = require("express");
const app = express();
const port = 9000;

// create a listener for our express server
app.listen(port, (e) => {
  if (e) {
    console.log(`Server is listening on: 127.0.0.1:{port}`);
  } else {
    console.log(`Server got an error! {e}`);
  }
});
