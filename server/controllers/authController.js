const bcryptjs = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();

const User = require("../models/userModel.js");


module.exports.signup = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    if (!email || !password || !name) {
      throw new Error("All fields are required");
    }

    const userAlreadyExists = await User.findOne({ email });

    if (userAlreadyExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
   

    const user = new User({
      email,
      password: hashedPassword,
      name,
     
    });

    await user.save();



    res.status(201).json({
      success: true,
      message: "User created successfully.",
      user: {
        ...user._doc,
        password: undefined, // Don't send the password back in the response
      },
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(400).json({ success: false, message: error.message });
  }
};
