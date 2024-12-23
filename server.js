require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const PORT = process.env.PORT || 3700

app.use("/", require("./routes/message"))

app.use("/data", require("./routes/detdata"))


app.listen(PORT, () => {

    console.log(`server starting at ${PORT}`)

})
