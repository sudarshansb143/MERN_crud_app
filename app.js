const express = require("express")
const router = require("./routes").router
const connectDB = require("./database")
const morgan = require("morgan")

require("dotenv").config()

const PORT = process.env.PORT || 5000

//--------------------------------- Start ---------------------------------

const app = express()

app.use(express.json())

console.log(`\n EnViroment is ------------- ${process.env.NODE_ENV} ------------- \n `)

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.use(router)

app.listen(PORT, () => console.log(`Server listening at ${PORT}`))