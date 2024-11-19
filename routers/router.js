const express = require("express");
const router = express();

// for error page simple msg
const onError = {
  msg: "Page not found!",
};

// Home Page!
router.get("/", (req, resp) => {
  try {
    resp.status(200).json({ msg: "Home Page!" });
  } catch (error) {
    resp.status(404).json(onError.msg);
  }
});
// About us page!
router.get("/about", (req, resp) => {
  try {
    resp.status(200).json({ msg: "About us Page!" });
  } catch (error) {
    resp.status(404).json(onError.msg);
  }
});
// Blog Page
router.get("/blog", (req, resp) => {
  try {
    resp.status(200).json({ msg: "Blog Page!" });
  } catch (error) {
    resp.status(404).json(onError.msg);
  }
});
// Contact page!
router.get("/contact", (req, resp) => {
  try {
    resp.status(200).json({ msg: "Contact Page!" });
  } catch (error) {
    resp.status(404).json(onError.msg);
  }
});

module.exports = router;
