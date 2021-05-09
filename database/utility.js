require("dotenv").config();
const Mongo = require("mongodb").MongoClient;
const chalk = require("chalk")
let globalDBInstance = false;

module.exports = {
  getCollection: async function (collectionName) {
    if (!globalDBInstance) {
      await connectDB();
    }
    return globalDBInstance.collection(collectionName);
  },
};

function internalConnectionToDatabase() {
  return new Promise(async (resolve, reject) => {
    let DB_NAME = process.env.DB_NAME;
    let dbURL = process.env.mongodb_url;
    let client = new Mongo(dbURL, { useUnifiedTopology: true });
    //connect
    try {
      let connect = await client.connect();
      let db = connect.db(DB_NAME);
      globalDBInstance = db;
      resolve(true);
    } catch (error) {
      reject(false);
      console.log("error while connecting ", error.message);
    }
  });
}

async function connectDB() {
  try {
    let result = await internalConnectionToDatabase ()
    if (result) {
      console.log(chalk.bgGreenBright.white("Database connected successfully !"))
    } else {
    console.log(chalk.bgRedBright.white("Problem while connecting database...."))
    }
  } catch (error) {
    console.log("error", error)
  }

}

connectDB()