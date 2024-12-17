import express from "express";
import { body } from "express-validator";
import * as authController from "../controllers/authController.js";
import { validate } from "../middleware/validator.js";
const router = express.Router();
router.post(
  "/register",
  [
    body("email").isEmail(),
    body("password").isLength({ min: 6 }),
    body("name").notEmpty(),
    body("role").isIn(["student", "instructor", "admin"]),
    validate,
  ],
  authController.register
);
router.post(
  "/login",
  [body("email").isEmail(), body("password").notEmpty(), validate],
  authController.login
);
export default router;
