const bcrypt = require("bcrypt"); //*hashing the password
const userSchema = require("../models/UserSchema");

// !SignUp Controller
exports.Signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username) {
      return res.status(400).json({ message: "Username required" });
    } else if (!email) {
      return res.status(400).json({ message: "Email required" });
    } else if (!password) {
      return res.status(400).json({ message: "Password required" });
    }
    const userPresent = await userSchema.findOne({ email: email });
    if (userPresent) {
      return res
        .status(401)
        .json({ message: "This User is already present.Try different email" });
    }
    // !Hashing the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const data = await userSchema.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(200).json({ message: "user created successfully ", data });
  } catch (error) {
    res.status(400).json({ message: "user cannot be created ", error });
    // console.log(first);
  }
};

// !Login Controller
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    } else if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }
    const data = await userSchema.findOne({ email }).select("+password");
    if (!data) {
      return res.status(400).json({ message: "Wrong Email/no data found" });
    }
    console.log(password, data.password);
    // !compare the hashed password
    const isPasswordMatch = await bcrypt.compare(password, data.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Wrong Password" });
    }
    // *successfully logged in
    res.status(200).json({ message: "Login success", data });
  } catch (error) {
    // res.status(500).json({ message: "An error occurred", error });
    res.status(500).json(error);
    console.log(error);
  }
};

// !Get a user Controller
exports.getUser = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "No id found.Please give id" });
    }
    const data = await userSchema.findById(id);
    if (!data) {
      return res.status(400).json({ message: "No data found for this id" });
    }
    res.status(200).json({ message: "This is the user data", data });
  } catch (error) {
    res.status(400).json({ message: "No user found" });
  }
};

// !Delete a user Controller
exports.deleteUser = async (req, res) => {
  try {
    const data = await userSchema.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted successfully.", data });
  } catch (error) {
    res.status(400).json({ message: "User can not be deleted." });
  }
};
