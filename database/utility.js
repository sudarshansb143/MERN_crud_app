require("dotenv").config();
const Mongo = require("mongodb").MongoClient;
let globalDBInstance = false;

module.exports = {
  getCollection: async function (collectionName) {
    if (!globalDBInstance) {
      await connectDB();
    }
    return globalDBInstance.collection(collectionName);
  },
};

function connectDB() {
  return new Promise(async (resolve, reject) => {
    let DB_NAME = process.env.DB_NAME;
    let dbURL = process.env.mongodb_url;
    let client = new Mongo(dbURL,  { useUnifiedTopology: true });
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

connectDB();
