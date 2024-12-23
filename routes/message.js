const express = require("express")
const router = express.Router()


router.get("/", (req, res) => {

    res.send("starting server")


})

module.exports = router