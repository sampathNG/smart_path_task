import express from "express";
import { body, param, query } from "express-validator";
import * as quizController from "../controllers/quizController.js";
import { validate } from "../middleware/validator.js";
import { authenticate, authorize } from "../middleware/auth.js";
const router = express.Router();
router.post(
  "/courses/:courseId/",
  authenticate,
  authorize("QUIZ", "CREATE"),
  [
    param("courseId").isMongoId(),
    body("questions").isArray(),
    body("questions.*.question").notEmpty(),
    body("questions.*.options").isArray(),
    body("questions.*.correctAnswer").notEmpty(),
    validate,
  ],
  quizController.createQuiz
);
router.get(
  "/courses/:courseId/",
  authenticate,
  authorize("QUIZ", "READ"),
  [
    param("courseId").isMongoId(),
    query("page").optional().isInt({ min: 1 }),
    query("limit").optional().isInt({ min: 1 }),
    validate,
  ],
  quizController.getQuizzesByCourse
);
router.get(
  "/:id",
  authenticate,
  authorize("QUIZ", "READ"),
  [param("id").isMongoId(), validate],
  quizController.getQuizById
);
router.put(
  "/:id",
  authenticate,
  authorize("QUIZ", "UPDATE"),
  [param("id").isMongoId(), validate],
  quizController.updateQuiz
);
router.delete(
  "/:id",
  authenticate,
  authorize("QUIZ", "DELETE"),
  [param("id").isMongoId(), validate],
  quizController.deleteQuiz
);
export default router;
