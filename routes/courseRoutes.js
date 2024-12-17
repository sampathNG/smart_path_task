import express from "express";
import { body, param, query } from "express-validator";
import * as courseController from "../controllers/courseController.js";
import { validate } from "../middleware/validator.js";
import { authenticate, authorize } from "../middleware/auth.js";
const router = express.Router();
router.post(
  "/",
  authenticate,
  authorize("COURSE", "CREATE"),
  [
    body("category").notEmpty(),
    body("description").notEmpty(),
    body("duration").isNumeric(),
    body("instructorName").notEmpty(),
    body("language").notEmpty(),
    body("level").isIn(["beginner", "intermediate", "advanced"]),
    body("price").isNumeric(),
    validate,
  ],
  courseController.createCourse
);
router.get(
  "/",
  authenticate,
  authorize("COURSE", "READ"),
  [
    query("page").optional().isInt({ min: 1 }),
    query("limit").optional().isInt({ min: 1 }),
    validate,
  ],
  courseController.getCourses
);
router.get(
  "/:id",
  authenticate,
  authorize("COURSE", "READ"),
  [param("id").isMongoId(), validate],
  courseController.getCourseById
);
router.put(
  "/:id",
  authenticate,
  authorize("COURSE", "UPDATE"),
  [param("id").isMongoId(), validate],
  courseController.updateCourse
);
router.delete(
  "/:id",
  authenticate,
  authorize("COURSE", "DELETE"),
  [param("id").isMongoId(), validate],
  courseController.deleteCourse
);
export default router;
