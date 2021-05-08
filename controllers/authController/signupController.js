const callback = require("../../helpers/helpers").responseFunction;
const getCollection = require("../../database").getCollection;

module.exports = {
  signupController: async function (req, res) {
    //basic validation

    let { username, email, password, confirmPassword } = req.body;

    if (!username || !email || !password || !confirmPassword) {
      return callback(res, null, "Please Provide Valid Data !");
    }

    //check pass and confirm pass
    if (!(password === confirmPassword)) {
      return callback(
        res,
        null,
        "Password and confirm password must be same !"
      );
    }

    let newUser = {
      email,
      username,
      password,
    };

    let userCollection = await getCollection("users");

    let { insertedId } = await userCollection.insertOne(newUser);

    let data = {
      insertedId,
    };

    return callback(res, data, null);
  },
};
