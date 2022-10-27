const User = require("../../models/User");
const { ApolloError } = require("apollo-server");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  Mutation: {
    async registerUser(
      _,
      { registerInput: { username, password, passwordCheck } }
    ) {
      // See if an old user exists with username attempting to register
      const oldUser = await User.findOne({ username });

      // Throw error if that user exists
      if (oldUser) {
        throw new ApolloError(
          "A user is already registered with the username " + username,
          "USER_ALREADY_EXISTS"
        );
      }

      // Throw errror if password and passwordCheck doesn't match
      if (password !== passwordCheck) {
        throw new ApolloError(
          "Password and password check doesn't match",
          "PASSWORD_CHECK_DOESNT_MATCH"
        );
      }

      // Encrypt password
      var encryptedPassword = await bcrypt.hash(password, 10);

      // Build out mongoose model
      const newUser = new User({
        username: username,
        password: encryptedPassword,
      });

      // Create our JWT (attach to our User model)
      const token = jwt.sign(
        { user_id: newUser._id, username },
        "UNSAFE_STRING",
        {
          expiresIn: "168h",
        }
      );
      newUser.token = token;

      // Save our user in MongoDB
      const res = await newUser.save();

      return {
        id: res.id,
        ...res._doc,
      };
    },
    async loginUser(_, { loginInput: { username, password } }) {
      // See if a user exists with the username
      const user = await User.findOne({ username });
      // Check if the entered password equlas the encrypted password
      if (user && (await bcrypt.compare(password, user.password))) {
        // Create a NEW token
        const token = jwt.sign(
          { user_id: user._id, username },
          "UNSAFE_STRING",
          {
            expiresIn: "168h",
          }
        );
        // Attach token to user model that we found above
        user.token = token;

        return {
          id: user.id,
          ...user._doc,
        };
      } else {
        // If user doesn't exist, return error
        throw new ApolloError(
          "Incorrect id or password",
          "INCORRECT_ID_OR_PASSWORD"
        );
      }
    },
  },
  Query: {
    user: (_, { ID }) => User.findById(ID),
  },
};
