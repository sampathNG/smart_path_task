import User from "../models/User.js";
import { generateToken } from "../middleware/auth.js";
export const register = async (req, res) => {
  try {
    const { email, password, name, role } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }
    const user = new User({ email, password, name, role });
    await user.save();
    // const token = generateToken(user);
    // res.status(201).json({ token, user: { id: user._id, email, name, role } });
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log(error);
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = generateToken(user);
    console.log(token);
    res.json({
      message: "Login successful",
      token,
      // user: { id: user._id, email, name: user.name, role: user.role },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
