const router = require("express").Router();
const path = require('path');

router
  .route("/")
  .get(function (req, res) {
    res.sendFile(path.join(__dirname + '../../public/index.html'));
  });


module.exports = router;