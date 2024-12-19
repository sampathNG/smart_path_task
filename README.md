# Educational Platform API

A RESTful API backend service for managing educational courses and quizzes. Built with Node.js/Express.js and MongoDB.

## 🚀 Features

### Core Features

- Complete CRUD operations for courses
- Complete CRUD operations for quizzes linked to courses
- Quiz-taking functionality with submission and results
- Structured data models for courses and quizzes
- RESTful API design principles
- Comprehensive error handling

### Bonus Features

- Pagination support for courses and quizzes listing
- Quiz attempt tracking and scoring system

## 🛠️ Tech Stack

- **Runtime Environment:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **Documentation:** Postman
- **Authentication:** JWT (JSON Web Tokens)

## 📝 API Endpoints

The API will be available at `http://localhost:3000`

## 📚 API Documentation

- Full API documentation is available at `https://documenter.getpostman.com/view/16226090/2sAYJ1mhbb` when running the server

## 🧪 Deployed link

- `https://smart-path-task.onrender.com/`

### Courses

```
POST   /api/courses              - Create a new course
GET    /api/courses              - Retrieve all courses
GET    /api/courses/:id          - Retrieve a specific course
PUT    /api/courses/:id          - Update a course
DELETE /api/courses/:id          - Delete a course
```

### Quizzes

```
POST   /api/courses/:courseId         - Create a quiz for a course
GET    /api/courses/:courseId         - Retrieve all quizzes for a course
GET    /api/quizzes/:id               - Retrieve a specific quiz
PUT    /api/quizzes/:id               - Update a quiz
DELETE /api/quizzes/:id               - Delete a quiz
```

## 🏗️ Data Models

### Course Model

```json
{
  "category": "CBSE",
  "chapters": [
    {
      "id": "1",
      "title": "chapter 1",
      "content": "none",
      "description": "DEMO FOR CBSE",
      "videoLink": "www.youtube.com/id/123",
      "duration": 1
    }
  ],
  "description": "DEMO FOR CBSE",
  "duration": 5,
  "instructorName": "Samarth Singh",
  "language": "English",
  "level": "beginner",
  "price": 1,
  "status": "published",
  "visibility": "public"
}
```

### Quiz Model

```json
{
  "id": "quiz123",
  "courseId": "course123",
  "questions": [
    {
      "id": "q1",
      "question": "What is JavaScript?",
      "options": [
        "Programming Language",
        "Text Editor",
        "Database",
        "Web Server"
      ],
      "correctAnswer": "Programming Language"
    }
  ]
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- pnpm or npm package manager

### Installation

1. Clone the repository

```bash
git https://github.com/sampathNG/smart_path_task
cd smart_path_task
```

2. Install dependencies

```bash
pnpm install
```

3. Create a .env file in the root directory

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Start the development server

```bash
pnpm run start
```

## 🧪 Testing

Run the test suite:

```bash
npm test
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

Your Name - [@yourgithub](https://github.com/sampathNG)

## 🙏 Acknowledgments

- Node.js Documentation
- Express.js Guide
- MongoDB Documentation
- RESTful API Design Best Practices
