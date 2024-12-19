import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });
import { PERMISSIONS } from "../config/roles.js";
export const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );
};
export const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Authentication required" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
export const authorize = (resource, action) => {
  return (req, res, next) => {
    const userRole = req.user.role;
    const allowedRoles = PERMISSIONS[resource][action];
    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({ message: "Permission denied" });
    }
    next();
  };
};
