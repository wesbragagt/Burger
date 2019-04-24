const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", (req, res) => {
    burger.all(burger_data => {
        console.log(burger_data);
        res.render("index", { burger_data });
    });
});

router.post("/burgers/update", (req, res) => {
    burger.update(req.body.burger_id, result => {
        console.log(result);
        res.redirect("/");
    });
});

module.exports = router;
