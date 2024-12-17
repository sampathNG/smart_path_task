import Quiz from "../models/Quiz.js";
import Course from "../models/Course.js";
export const createQuiz = async (req, res) => {
  try {
    const courseExists = await Course.findById(req.params.courseId);
    if (!courseExists) {
      return res.status(404).json({ message: "Course not found" });
    }
    const quiz = new Quiz({
      courseId: req.params.courseId,
      questions: req.body.questions,
    });
    await quiz.save();
    res.status(201).json(quiz);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const getQuizzesByCourse = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const quizzes = await Quiz.find({ courseId: req.params.courseId })
      .skip(skip)
      .limit(limit);
    const total = await Quiz.countDocuments({ courseId: req.params.courseId });
    res.json({
      quizzes,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalQuizzes: total,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const updateQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }
    res.json(quiz);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const deleteQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findByIdAndDelete(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }
    res.json({ message: "Quiz deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
