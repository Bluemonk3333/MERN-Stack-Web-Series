const express = require("express");
const router = express();

// create Home Page!
router.get("/", (req, resp) => {
  try {
    resp.status(200).json({ msg: "Home Page!" });
  } catch (error) {
    resp.status(404).json({ msg: "Page not found!" });
  }
});

module.exports = router;
