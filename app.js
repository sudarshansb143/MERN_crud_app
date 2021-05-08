const express = require("express")
const router = require("./routes").router
const connectDB = require("./database")
const morgan = require("morgan")
const chalk = require("chalk")

require("dotenv").config()

const PORT = process.env.PORT || 5000

//--------------------------------- Start ---------------------------------

const app = express()

app.use(express.json())

console.log((`\n EnViroment is ------------- ${chalk.bgYellowBright.black(process.env.NODE_ENV)} ------------- \n `))

app.use(morgan(chalk.cyanBright('\n :method :url :status :res[content-length] - :response-time ms \n')))

app.use(router)

app.listen(PORT, () => console.log(chalk.blueBright (`\n Server listening at PORT ${PORT} \n `)))