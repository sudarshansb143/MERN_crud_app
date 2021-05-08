const callback = require("../../helpers/helpers").responseFunction;
const getCollection = require("../../database").getCollection;

module.exports = {
  signupController: async function (req, res) {
    //basic validation

    let { username, email, password, confirmPassword } = req.body;

    if (!username || !email || !password || !confirmPassword) {
      callback(res, null, "Please Provide Valid Data !");
    }

    //check pass and confirm pass
    if (!(password === confirmPassword)) {
      callback(res, null, "Password and confirm password must be same !");
    }

    let userCollection = await getCollection("users");

    let findResult = await userCollection.findOne({ email });

    if (findResult) {
      callback(res, null, "email is already taken !");
    } else {
      let newUser = {
        email,
        username,
        password,
      };

      let { insertedId } = await userCollection.insertOne(newUser);

      let data = {
        insertedId,
      };
      callback(res, data, null);
    }
  },
};
