const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

// JWT secret
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

// ================= REGISTER ROUTE =================
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1️⃣ SERVER SIDE VALIDATION
    if (!name || !email || !password) {
      return res.json({ success: false, message: "All fields are required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.json({ success: false, message: "Invalid email format" });
    }

    if (password.length < 6) {
      return res.json({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }

    // 2️⃣ Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "Email already registered" });
    }

    // 3️⃣ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4️⃣ Save user in database
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return res.json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    return res.json({ success: false, message: "Server error" });
  }
});

// ================= LOGIN ROUTE =================
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // 1️⃣ Validate input
  if (!email || !password) {
    return res.json({ success: false, message: "All fields are required" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.json({ success: false, message: "Invalid email format" });
  }

  try {
    // 2️⃣ Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "Email or password is incorrect",
      });
    }

    // 3️⃣ Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({
        success: false,
        message: "Email or password is incorrect",
      });
    }

    // 4️⃣ Generate JWT token
    const token = jwt.sign(
      { id: user._id, name: user.name, email: user.email },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    // 5️⃣ Send token + user to frontend
    return res.json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {
    console.error(error);
    return res.json({ success: false, message: "Server error" });
  }
});

module.exports = router;
