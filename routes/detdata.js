const express = require("express")
const router = express.Router()
const axios = require("axios")




const getCityData = async (req, res) => {

    const city = req.body.city

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + process.env.API_KEY

    const response = await axios.get(url)

    const weatherApp = response.data

    res.json(weatherApp)

}

router.post("/", getCityData)



module.exports = router