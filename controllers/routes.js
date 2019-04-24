const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", (req, res) => {
    burger.all(burger_data => {
        console.log(burger_data);
        res.render("index", { burger_data });
    });
});

module.exports = router;
